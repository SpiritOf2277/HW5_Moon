import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoonPhaseService } from '../moon-phase.service';

@Component({
  selector: 'app-moon-phase',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './moon-phase.component.html',
  styleUrl: './moon-phase.component.css'
})
export class MoonPhaseComponent implements OnInit {
  selectedDate: string = new Date().toISOString().slice(0, 10);
  moonPhaseData: any;

  constructor(private moonPhaseService: MoonPhaseService) {}

  ngOnInit(): void {
    this.fetchMoonPhase(this.selectedDate);
  }

  onDateChange(): void {
    const selectedMonth = new Date(this.selectedDate).getMonth();
    const currentMonth = new Date().getMonth();

    if (selectedMonth !== currentMonth) {
      this.fetchMoonPhase(this.selectedDate);
    }
  }

  fetchMoonPhase(date: string): void {
    this.moonPhaseService.getMoonPhase(date).subscribe(data => {
      this.moonPhaseData = data;
    });
  }
}