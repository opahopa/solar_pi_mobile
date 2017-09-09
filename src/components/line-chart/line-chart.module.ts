import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LineChartComponent } from "./line-chart";
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    LineChartComponent,
  ],
  imports: [
    ChartsModule,
    IonicModule,
  ],
  exports: [
    LineChartComponent
  ]
})
export class LineChartComponentModule {}
