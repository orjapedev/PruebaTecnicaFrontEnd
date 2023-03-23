import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from  '@angular/forms'
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FormularioComponent
  ]
})
export class OperacionesModule { }
