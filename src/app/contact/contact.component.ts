<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 86460deabaa0e60e5489a6e4c12c3a238de0ee75

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
<<<<<<< HEAD

export class ContactComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
=======
export class ContactComponent implements OnInit {

  constructor() { }
>>>>>>> 86460deabaa0e60e5489a6e4c12c3a238de0ee75

  ngOnInit() {
  }

<<<<<<< HEAD
  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      telnum: ['', Validators.required ],
      email: ['', Validators.required ],
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }

=======
>>>>>>> 86460deabaa0e60e5489a6e4c12c3a238de0ee75
}
