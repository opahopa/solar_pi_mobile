import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChartType} from "../../components/line-chart/chart-type";
import {DummyDataProvider} from "../../providers/dummydata";
import {StatsProvider} from "../../providers/stats/stats";
import {ConsumptionStats} from "../../models/consumption-stats";

/**
 * Generated class for the StatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {
  dataPeriodSegment: string = 'hourly';
  chartType:ChartType = ChartType.HOURLY;

  public lineChartData:Array<any>;
  public tempChartData:Array<ConsumptionStats>;

  constructor(public navCtrl: NavController, private dummyData: DummyDataProvider, private statsProvider: StatsProvider) {
    this.lineChartData =  this.dummyData.getHourlyChartData();
  }

  statsSegmentChanged(event) {
    console.log(event.value)
    switch (event.value) {
      case 'hourly': {
        this.chartType = ChartType.HOURLY;
        this.lineChartData = this.dummyData.getHourlyChartData();
        break;
      }
      case 'monthly': {
        this.chartType = ChartType.MONTHLY;
        // this.statsProvider.getMonthlyData().subscribe((data)=>{
        //   this.lineChartData = data.map(function(a) {return a.energy;});
        //
        //   let testSorted = data.sort((a, b) => a.time - b.time);
        //   console.log(testSorted);
        //
        //   console.log(this.lineChartData);
        // });
        this.lineChartData = this.dummyData.getMonthlyChartData();
        break;
      }
      case 'yearly': {
        this.chartType = ChartType.YEARLY;
        this.lineChartData = this.dummyData.getYearlyChartData();
        break;
      }
    }
  }

  convertDialyToMonthly(data: ConsumptionStats[]) {
    let monthlyData:ConsumptionStats[];
    let months:any[];
    for (let day in data) {
        months.push(

        )
    }
  }

  testApi(){
    this.statsProvider.getMonthlyData().subscribe((data)=>{
      this.tempChartData = data;
      console.log(this.tempChartData);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
  }

}
