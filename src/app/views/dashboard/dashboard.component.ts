import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuItem, Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MessagesModule,CommonModule,FormsModule,ReactiveFormsModule,ChartModule,TabViewModule,ButtonModule,MenuModule,AccordionModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  messages: Message[] = [];
  data: any;

  options: any;
  items: MenuItem[] =[];
  ngOnInit() {
    this.messages.push({
      severity: 'warn',
      summary: 'Warning',
      detail: 'You need to top up your account with £180 to cover scheduled payments.'
    });
  


  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
  
  this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Dataset 1',
              fill: false,
              borderColor: documentStyle.getPropertyValue('--blue-500'),
              yAxisID: 'y',
              tension: 0.4,
              data: [65, 59, 80, 81, 56, 55, 10]
          },
          {
              label: 'Dataset 2',
              fill: false,
              borderColor: documentStyle.getPropertyValue('--green-500'),
              yAxisID: 'y1',
              tension: 0.4,
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
    }


    this.options = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder
              }
          },
          y: {
              type: 'linear',
              display: true,
              position: 'left',
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder
              }
          },
          y1: {
              type: 'linear',
              display: true,
              position: 'right',
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  drawOnChartArea: false,
                  color: surfaceBorder
              }
          }
      }
  };


  this.items = [
    {
        label: 'Options',
        items: [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Export',
                icon: 'pi pi-upload'
            }
        ]
    }
  ];

}





}
  



