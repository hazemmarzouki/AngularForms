import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contactReactive-Form',
  templateUrl: './contactReactive-Form.component.html',
  styleUrls: ['./contactReactive-Form.component.css'],
})
export class ContactReactiveFormComponent implements OnInit {

  FormData!: FormGroup;

  constructor(private Builder: FormBuilder ,  private contact: ContactService) {}

  ngOnInit() {

    this.FormData = this.Builder.group({
      FullName: new FormControl('' , [Validators.required, Validators.minLength(3)]),
      Email: new FormControl('' , [Validators.required, Validators.email]),
      Phone : new FormControl('' , [Validators.required, Validators.minLength(8)]),
      Message: new FormControl('' , [Validators.required]),

  }
    );}

    onSubmit(FormData:any) {
      console.log(FormData)
      this.contact.PostMessage(FormData)
      .subscribe(response => {
      location.href = 'https://mailthis.to/confirm'
      console.log(response)
      }, error => {
      console.warn(error.responseText)
      console.log({ error })
      })
}}
