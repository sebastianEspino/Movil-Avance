import { Router } from "@angular/router"; 
import { Component, OnInit } from '@angular/core'
import { TextField } from "@nativescript/core";




@Component({
    selector: 'formulario_calificacion',
    templateUrl: './formulario_calificacion.html',
    styleUrls: ['./formulario_calificacion.css'],
  })
  export class CalificacionesComponent {
    public constructor(private router: Router) {
      // Use the component constructor to inject providers.
    }
    public onTap(){
        this.router.navigate(["home"]);
      }
      
}