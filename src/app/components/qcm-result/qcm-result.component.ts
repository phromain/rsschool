import { AfterViewInit, Component, OnInit } from '@angular/core';
import { QcmService } from '../../service/qcm.service';
import {NgFor,CommonModule } from "@angular/common";

declare var Chart: any;

@Component({
  selector: 'app-qcm-result',
  standalone: true,
  imports: [NgFor, CommonModule ],
  templateUrl: './qcm-result.component.html',
  styleUrl: './qcm-result.component.css'
})
export class QcmResultComponent implements OnInit, AfterViewInit  {
  categories = ['Social', 'Environnement', 'Économique', 'Local', 'Gouvernance', 'Communication'];
  averages: { [key: string]: number } = {};
  globalAverage: number = 0;
  rseImage: string = '';

  constructor(private qcmService: QcmService) {}

  ngOnInit() {
    this.averages = this.qcmService.getAllAverages();
    this.globalAverage = this.qcmService.getGlobalAverage();
    this.rseImage = this.qcmService.getRseImage(this.globalAverage);
    
  }

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const data = {
      labels: this.categories,
      datasets: [{
        label: 'Moyenne des QCM',
        data: [
          this.averages['social'],
          this.averages['env'],
          this.averages['eco'],
          this.averages['local'],
          this.averages['gouv'],
          this.averages['com']

        ],
        borderWidth: 3
      }]
    };

    const config = {
      type: 'radar',
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        },
        scales: {
          r: {
            min: 0,
            max: 4
          }
        }
      }
    };

    const ctx = document.getElementById('radarChart') as HTMLCanvasElement;
    new Chart(ctx, config);
  }

}
