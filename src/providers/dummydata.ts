import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
 Generated class for the StatsProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class DummyDataProvider {

  constructor() {
    console.log('Hello StatsProvider Provider');
  }

  getHourlyChartData() {
    return [{data: [0,
        0,
        0,
        0,
        0,
        0,
        0,
        225.646,
        988.551,
        1768.705,
        2326.677,
        2611.46,
        2660.433,
        2502.073,
        2112.969,
        1478.993,
        697.281,
        67.262,
        0,
        0,
        0,
        0,
        0
      ], label: 'W'}];
  }

  getMonthlyChartData() {
    return [
      {data: [
        18188.856,
        15514.887,
        17021.08,
        12393.276,
        14502.232,
        15656.536,
        12225.617,
        16312.129,
        14031.803,
        13137.023,
        17647.583,
        17181.31,
        17957.806,
        17723.328,
        18263.819,
        16636.077,
        19498.711,
        15351.718,
        16208.701,
        18217.471,
        15351.718,
        16208.701,
        15848.248,
        17851.848,
        15514.887,
        17021.08,
        12393.276,
        14502.232,
        15656.536,
        14502.232,
        12393.276,
      ], label: 'kWt'}
    ];
  }

  getYearlyChartData() {
    return [
      {data: [
        483.58868408,
        464.61251831,
        549.23760986,
        487.28564453,
        445.66430664,
        434.2906189,
        424.89498901,
        395.50335693,
        416.74108887,
        425.59484863,
        460.40267944,
        480.2651062
      ], label: 'kWh'}
    ];
  }
}
