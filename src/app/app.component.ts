import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoonPhaseComponent } from "./moon-phase/moon-phase.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MoonPhaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HW5_Moon';
}
