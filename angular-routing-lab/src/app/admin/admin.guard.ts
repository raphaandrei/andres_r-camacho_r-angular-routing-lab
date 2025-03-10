import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAdmin = false; // Change this to `true` to allow access
    if (!isAdmin) {
      alert('Access Denied!'); // Redirect to home if not allowed
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}