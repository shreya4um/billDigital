import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';


@Component({
  selector: 'app-signup-select-account',
  standalone: true,
  imports: [CommonModule,FormsModule, InputTextModule, ButtonModule, CheckboxModule, ReactiveFormsModule,TabMenuModule,AvatarModule,AvatarGroupModule],
  templateUrl: './signup-select-account.component.html',
  styleUrl: './signup-select-account.component.scss'
})
export class SignupSelectAccountComponent {

 

}
