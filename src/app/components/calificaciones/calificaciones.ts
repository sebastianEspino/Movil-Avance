import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 
import { timeout } from 'rxjs';

@Component({
  selector: 'calificaciones',
  templateUrl: './calificaciones.html',
  styleUrls:['./calificaciones.css'],

})
export class CalificacionesComponent {
  public constructor(private router: Router) {
    // Use the component constructor to inject providers.
  }

  public onTap(){
    this.router.navigate(["home"]);
  }

  
}