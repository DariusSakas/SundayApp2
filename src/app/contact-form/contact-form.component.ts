import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email:string;
  log(email:string) {
    console.log(email);
  }
  submitForm(userForm:NgForm) {
    console.log('Form was submitted.');
    console.log(`Email: ${userForm.value.email} Pass: ${userForm.value.password}`)
  }
}
