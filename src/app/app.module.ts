import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './forms/templateDriven-Form/templateDriven-Form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
