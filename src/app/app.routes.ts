import { Routes } from '@angular/router';
import { BoardUserComponent } from './feature/board-user/board-user.component';
import { BoardModeratorComponent } from './feature/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './feature/board-admin/board-admin.component';
import { TripListComponent } from './feature/trip/trip-list/trip-list.component';
import { TripListFullComponent } from './feature/trip/trip-list-full/trip-list-full.component';
import { TripAddComponent } from './feature/trip/trip-add/trip-add.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './feature/about/about.component';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { ProfileComponent } from './feature/profile/profile.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'about', component: AboutComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'user', component: BoardUserComponent },
{ path: 'mod', component: BoardModeratorComponent },
{ path: 'admin', component: BoardAdminComponent },
{ path: 'trips', component: TripListComponent },
{ path: 'trips/all', component: TripListFullComponent },
{ path: 'trips/add', component: TripAddComponent },
// { path: 'navbar', component: NavbarComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' }];
