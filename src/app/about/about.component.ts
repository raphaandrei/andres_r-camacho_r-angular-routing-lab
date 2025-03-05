import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';


@Component({

  selector: 'app-about',

  standalone: true,

  imports: [RouterModule], // ✅ Import RouterModule

  templateUrl: './about.component.html',

  styleUrls: ['./about.component.css']

})

export class AboutComponent {}