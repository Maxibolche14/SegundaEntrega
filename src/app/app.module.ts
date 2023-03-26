import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { AlumnosComponent } from './component/alumnos/alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
