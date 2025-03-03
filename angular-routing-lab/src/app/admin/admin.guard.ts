import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = this.checkAdmin(); // Replace with actual authentication logic

    if (!isAuthenticated) {
      this.router.navigate(['/home']); // Redirect if not authorized
      return false;
    }

    return true;
  }

  private checkAdmin(): boolean {
    // Add actual authentication/authorization logic here
    return false; // Change to actual check
  }
}
