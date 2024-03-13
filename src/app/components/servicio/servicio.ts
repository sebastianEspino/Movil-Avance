import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 

@Component({
  selector: 'servicio',
  templateUrl: './servicio.html',
  styleUrls: ['./servicios.css']
})
export class ServicioComponent {
  public constructor(private router: Router) {
    // Use the component constructor to inject providers.
  }

  public onTap(){
    this.router.navigate(["home"]);
  }
}
