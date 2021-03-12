import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    ProyectosComponent, 
    AboutComponent, ContactComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ProyectosComponent, 
    AboutComponent
  ]
})
export class PagesModule { }
