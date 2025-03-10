import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './about/profile/profile.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminGuard } from './admin/admin.guard';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'profile', component: ProfileComponent } // Child route
    ]
  },
  { path: 'contact', component: ContactComponent },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [AdminGuard] // Protect with AdminGuard
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [AdminGuard] // ✅ Route guard for security
  }

];