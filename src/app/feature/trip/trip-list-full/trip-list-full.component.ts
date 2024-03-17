import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { Trip } from '../../../_models/trip.model';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trip-list-full',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './trip-list-full.component.html',
  styleUrl: './trip-list-full.component.css'
})
export class TripListFullComponent implements OnInit {
  trips?: Trip[];
  currentTrip: Trip = {};
  currentIndex = -1;
  title = '';

  constructor(private tripService: TripService) {}

  ngOnInit(): void {
    this.retrieveTrips();
  }

  retrieveTrips(): void {
    this.tripService.getAll().subscribe({
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

  setActiveTrip(tutorial: Trip, index: number): void {
    this.currentTrip = tutorial;
    this.currentIndex = index;
  }

  removeAllTrips(): void {
    this.tripService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
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
