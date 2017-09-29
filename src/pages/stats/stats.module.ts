import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatsPage } from './stats';
import {LineChartComponentModule} from "../../components/line-chart/line-chart.module";

@NgModule({
  declarations: [
    StatsPage,
  ],
  imports: [
    IonicPageModule.forChild(StatsPage),
    LineChartComponentModule
  ],
})
export class StatsPageModule {}
