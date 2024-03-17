import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';
import { TripAddComponent } from './trip/trip-add/trip-add.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    
],
  imports: [
    CommonModule,
    HomeComponent,
    AboutComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    LoginComponent,
    RegisterComponent,
    TripListComponent,
    TripAddComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    LoginComponent,
    RegisterComponent,
    TripListComponent,
    TripAddComponent
  ]
})
export class FeatureModule { }