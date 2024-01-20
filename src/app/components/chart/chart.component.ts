import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import { color } from 'highcharts';
import { Highcharts } from 'highcharts/modules/map';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  values={
    name: 'إحصايات إستخدام القسيمة',
    data: [10, 2, 3, 6, 9, 11, 23, 14, 15, 12, 19, 25]
  } as any
  
  highcharts = Highcharts;

  lineChart = new Chart({
    chart: {
      type: 'areaspline',
      
    },
    title: {
      text: 'إحصايات إستخدام القسيمة'
    },
    subtitle: {
      text: "new Date(5/11/2022)"
    },
    
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: -150,
      y: 100,
      floating: true,
      borderWidth: 1,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ["ديسمبر", "نوفمبر", "اكتوبر", "سبتمبر", "أغسطس", "يولبو",
        "يونيو", "مايو", "ابريل", "مارس", "فبراير", "يناير"],
    },
    series: [
      this.values,
      // {
      //   name: 'إحصايات إستخدام القسيمة',
      //   data: [10, 2, 4, 6, 12, 7, 2, 19, 15, 12, 19, 25]
      // } as any
    ]
  });

  add = () => {
    this.lineChart.addPoint(Math.floor(Math.random() * 10))
  }
}

