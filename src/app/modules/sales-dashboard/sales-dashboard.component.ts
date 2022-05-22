import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.scss']
})
export class SalesDashboardComponent implements OnInit {

  barChartOptions: any;
  donutChartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.barChartOptions = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      }
    };

    this.donutChartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    };
  }

}
