import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MiTablaComponent } from './mi-tabla/mi-tabla.component';
import { MiTablaServiceService } from './mi-tabla-service.service';
import { MiFormularioComponent } from './mi-formulario/mi-formulario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [MiTablaComponent, MiFormularioComponent],
  exports: [
    MiTablaComponent
  ],
  providers: [
    MiTablaServiceService
  ]
})
export class ModuloDatosModule { }
