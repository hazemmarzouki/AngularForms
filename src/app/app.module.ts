import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './forms/templateDriven-Form/templateDriven-Form.component';
import { ContactReactiveFormComponent } from './forms/contactReactive-Form/contactReactive-Form.component';

import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ContactReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

   
  ],
  providers: [
    ContactService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
