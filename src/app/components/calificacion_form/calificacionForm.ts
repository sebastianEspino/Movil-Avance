import { Router } from "@angular/router"; 
import { Component, OnInit } from '@angular/core'
import { TextField } from "@nativescript/core";




@Component({
    selector: 'calificacionForm',
    templateUrl: './calificacionForm.html',
    styleUrls: ['./calificacionForm.css'],
  })
  export class CalificacionFormComponent {
    public constructor(private router: Router) {
      // Use the component constructor to inject providers.
    }
    public onTap(){
        this.router.navigate(["home"]);
      }
      
}