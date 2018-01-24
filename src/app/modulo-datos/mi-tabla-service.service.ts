import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MiTablaServiceService {

  constructor(private http: HttpClient) { }

  public misDatos = [
    {nombre: 'sebastian',
    apellido: 'puentes'},
    {nombre: 'sebastian',
    apellido: 'puentes'},
    {nombre: 'sebastian',
    apellido: 'puentes'},
    {nombre: 'sebastian',
    apellido: 'puentes'},
    {nombre: 'sebastian',
    apellido: 'puentes'},
  ];

  obtenerDatos(): any {
    return this.http.get('http://5a0b5a966c25030012c33559.mockapi.io/dummyData/moraCarteraDetalle/')
    .map(res => {
        console.log(res);
        return res;
      });
  }

}
