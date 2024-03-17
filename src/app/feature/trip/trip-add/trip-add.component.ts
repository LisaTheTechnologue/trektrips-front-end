import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { DestinationService } from '../../../_services/destination.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../MaterialModule';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-add',
  standalone: true,
  imports: [CommonModule,MaterialModule,ReactiveFormsModule],
  templateUrl: './trip-add.component.html',
  styleUrl: './trip-add.component.css'
})
export class TripAddComponent implements OnInit {
  form!: FormGroup;
  listOfDestinations: any = [];
  submitted = false;

  constructor(private fb: FormBuilder,
    private tripService: TripService,
    private destinationService: DestinationService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      highlights: new FormControl(''),
      destinationId: new FormControl('', [Validators.required])
    });
    this.getAllDestinations();
  }
  get f(){
    return this.form.controls;
  }

  getAllDestinations(): void {
    this.destinationService.getAll().subscribe({
      next: (data) => {
        this.listOfDestinations = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  createTrip(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      // const formData: FormData = new FormData();

      this.tripService.create(this.form.value).subscribe(
        (res) => {
          if (res.id != null) {
            // this.snackBar.open("Trip saved successfully.", 'Close', { duration: 5000 });
            // this.router.navigateByUrl('/trips');
            console.log(res);
            this.submitted = true;
          } else {
            console.log(res);
            // this.snackBar.open(res.message, 'ERROR', { duration: 5000, panelClass: 'error-snackbar' });
          }
        })
    } else {
      for (const i in this.form.controls) {
        this.form.controls[i].markAsDirty();
        this.form.controls[i].updateValueAndValidity();

      }
    }
  }
}
