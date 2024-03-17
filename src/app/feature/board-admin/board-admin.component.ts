import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board-admin',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  // content?: string;
  users?: User[];
  currentUser: User = {};
  currentIndex = -1;
  username = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAll().subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = {};
    this.currentIndex = -1;
  }

  // searchUsername(): void {
  //   this.currentUser = {};
  //   this.currentIndex = -1;

  //   this.userService.findByUsername(this.username).subscribe({
  //     next: (data) => {
  //       this.users = data;
  //       console.log(data);
  //     },
  //     error: (e) => console.error(e)
  //   });
  // }
    // this.userService.getAdminBoard().subscribe({
    //   next: data => {
    //     this.content = data;
    //   },
    //   error: err => {
    //     if (err.error) {
    //       try {
    //         const res = JSON.parse(err.error);
    //         this.content = res.message;
    //       } catch {
    //         this.content = `Error with status: ${err.status} - ${err.statusText}`;
    //       }
    //     } else {
    //       this.content = `Error with status: ${err.status}`;
    //     }
    //   }
    // });

}
