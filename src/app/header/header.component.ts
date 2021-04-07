import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';

=======
>>>>>>> 86460deabaa0e60e5489a6e4c12c3a238de0ee75

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

<<<<<<< HEAD
  constructor(public dialog: MatDialog) { }
=======
  constructor() { }
>>>>>>> 86460deabaa0e60e5489a6e4c12c3a238de0ee75

  ngOnInit() {
  }

<<<<<<< HEAD
  openLoginForm(){
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

=======
>>>>>>> 86460deabaa0e60e5489a6e4c12c3a238de0ee75
}
