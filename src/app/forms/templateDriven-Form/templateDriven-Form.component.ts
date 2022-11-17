import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateDriven-Form',
  templateUrl: './templateDriven-Form.component.html',
  styleUrls: ['./templateDriven-Form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  user = { fname: 'Hazem', lname: 'Marzouki' };
  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {

    console.log('Modal Value:',this.user);
    console.log(' **** form value:', form.value);
  }
}
