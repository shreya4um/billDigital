import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ MenuModule, BadgeModule, RippleModule, AvatarModule,ButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
       
          {
           
              items: [
                  {
                      label: 'Home',
                      icon: 'pi pi-home',
                    
                  },
                  {
                      label: 'Bills',
                      icon: 'pi pi-arrow-right-arrow-left',
                  
                  },

            {
                  label: 'Reports',
                  icon: 'pi pi-folder',
               
              },                 
                
              ]
          },
      
         
      ];
  }
}

