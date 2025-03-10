import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true, // Mark as standalone
  imports: [RouterOutlet], // Import RouterOutlet
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}