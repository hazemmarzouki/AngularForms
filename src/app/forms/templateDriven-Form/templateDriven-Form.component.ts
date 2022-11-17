import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateDriven-Form',
  templateUrl: './templateDriven-Form.component.html',
  styleUrls: ['./templateDriven-Form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const msg = `${form.value.name} Has Submitted Successfully!`;
    alert(msg);
  }
}
