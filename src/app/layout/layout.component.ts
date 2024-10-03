import { Component } from '@angular/core';
import { HeaderComponent } from "../common-layout/header/header.component";
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../common-layout/sidebar/sidebar.component";
import { DashboardComponent } from '../views/dashboard/dashboard.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, SidebarComponent,DashboardComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
