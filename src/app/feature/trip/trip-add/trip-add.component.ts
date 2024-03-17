import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { DestinationService } from '../../../_services/destination.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../MaterialModule';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormUtilsService } from '../../../_services/form-utils.service';

@Component({
  selector: 'app-trip-add',
  standalone: true,
  imports: [CommonModule,MaterialModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './trip-add.component.html',
  styleUrl: './trip-add.component.css'
})
export class TripAddComponent implements OnInit {
  form: FormGroup;
  listOfDestinations: any = [];
  submitted = false;
  selectedFile: File|null;
  imagePreview: string | ArrayBuffer | null;

  // fileName = 'Select File';
  // fileInfos?: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private tripService: TripService,
    private destinationService: DestinationService,    
    public formUtils: FormUtilsService) { 
      
    }

  ngOnInit(): void {    
    this.form = this.fb.group({
      // _id: [trip._id],
      title: [
        null,
        [Validators.required, Validators.minLength(5), Validators.maxLength(100)]
      ],
      highlights:[null,[]],
      destinationId: [null, [Validators.required]],
      // imgfile:['',[]],
      // lessons: this.fb.array(this.retrieveLessons(trip), Validators.required)
    });
    this.getAllDestinations();
  }

  getErrorMessage(fieldName: string): string {
    return this.formUtils.getFieldErrorMessage(this.form, fieldName);
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.previewImg();    
  }

  previewImg(){
    const reader = new FileReader();
    const file = this.selectedFile;
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    if (file && file.type.match('image.*')) {
      reader.readAsDataURL(file);
    } 
  }

  get f(){
    return this.form.controls;
  }

  getAllDestinations(): void {
    this.destinationService.getAll().subscribe({
      next: (data) => {
        this.listOfDestinations = data;
        // console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  createTrip(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      const formData: FormData = new FormData();
      const file = this.selectedFile;
      if (file && file.type.match('image.*')) {
        formData.append('img', file);
      }

      formData.append('destinationId', this.form.get('destinationId')!.value);
      formData.append('title', this.form.get('title')!.value);
      formData.append('highlights', this.form.get('highlights')!.value);
      // must use form-data to send image
      this.tripService.create(formData).subscribe(
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