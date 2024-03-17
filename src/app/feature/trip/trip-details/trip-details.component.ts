import { Component } from '@angular/core';
import { MaterialModule } from '../../../MaterialModule';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.css'
})
export class TripDetailsComponent {

}
