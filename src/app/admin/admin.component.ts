import { Component } from '@angular/core';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent, FooterComponent, RouterOutlet, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
