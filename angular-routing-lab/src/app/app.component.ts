import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './about/profile/profile.component';
import { AdminComponent } from './admin/admin/admin.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent, ContactComponent, HomeComponent, ProfileComponent, RouterModule, AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-routing-lab';
}