import { MiTablaServiceService } from './../mi-tabla-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-tabla',
  templateUrl: './mi-tabla.component.html',
  styleUrls: ['./mi-tabla.component.css']
})
export class MiTablaComponent implements OnInit {

  constructor(private service: MiTablaServiceService) {
    this.datos = service.misDatos;
   }

  datos: any;
  datosHttp: any;

  ngOnInit() {
    this.service.obtenerDatos().subscribe(res => {
      this.datosHttp = res;
    });
  }
}
