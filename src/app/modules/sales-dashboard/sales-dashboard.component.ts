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
          name: "Total de Vendas",
          data: [44, 55, 57, 56, 61]
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
          "Seg",
          "Ter",
          "Qua",
          "Qui",
          "Sex"
        ]
      },
      yaxis: {
        title: {
          text: "Quantidade de Vendas"
        }
      },
      fill: {
        colors: ['#f59b42'],
        opacity: 1
      }
    };

    this.donutChartOptions = {
      series: [84, 24, 54, 64, 44],
      chart: {
        type: "donut"
      },
      labels: ["Computadores", "Móveis", "Jogos Digitais", "Periféricos", "Decoração"]
    };
  }

}
