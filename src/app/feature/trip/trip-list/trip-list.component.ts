import { Component, OnInit } from '@angular/core';
import { Trip } from '../../../_models/trip.model';
import { TripService } from '../trip.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './trip-list.component.html',
  styleUrl: './trip-list.component.css'
})
export class TripListComponent implements OnInit {
  trips?: Trip[];
  currentTrip: Trip = {};
  currentIndex = -1;
  title = '';

  constructor(private tripService: TripService) {}

  ngOnInit(): void {
    this.retrieveTrips();
  }

  retrieveTrips(): void {
    this.tripService.getAllPublished().subscribe({
      next: (data) => {
        this.trips = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
  
  refreshList(): void {
    this.retrieveTrips();
    this.currentTrip = {};
    this.currentIndex = -1;
  }

  searchTitle(): void {
    this.currentTrip = {};
    this.currentIndex = -1;

    this.tripService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.trips = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}