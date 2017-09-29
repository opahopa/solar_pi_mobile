import {Component, Input} from '@angular/core';
import {ChartType} from "./chart-type";

/**
 * Generated class for the HourlyChartComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'line-chart',
  templateUrl: 'line-chart.html'
})
export class LineChartComponent {
  @Input() lineChartData:any;
  @Input() chartType: ChartType;

  total:number;
  avg:number;
  unit:string;

  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(237, 172, 21, 0.2)',
      borderColor: 'rgb(237, 172, 21)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(237, 172, 21, 0.2)',
      borderColor: 'rgb(237, 172, 21)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() {
    console.log('Hello HourlyChartComponent Component');
  }

  ngOnInit() {
    this.total = Math.round(this.lineChartData[0].data.reduce((a, b) => a + b, 0));
    this.avg = Math.round(this.total/this.lineChartData[0].data.length);



    switch (this.chartType) {
      case ChartType.HOURLY:
        this.unit = 'W';
        this.lineChartLabels = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00',
          '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
          '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
        break;
      case ChartType.MONTHLY:
        this.unit = 'kWt';
        this.total = this.total/1000;
        this.avg = this.avg/1000;
        this.lineChartLabels = ['1', '2', '3', '4', '5', '6',
          '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'
          , '23', '24', '25', '26', '27', '28', '29', '30'];
        break;
      case ChartType.YEARLY:{
        this.unit = 'kWt';
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'Novermber', 'December'];
        break;
      }

    }
  }
}
