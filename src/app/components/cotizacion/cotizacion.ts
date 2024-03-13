import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 

@Component({
  selector: 'cotizacion',
  templateUrl: './cotizacion.html',
  styleUrls:['./cotizacion.css']
})
export class CotizacionComponent {
  public constructor(private router: Router) {
    // Use the component constructor to inject providers.
  }

  public onTap(){
    this.router.navigate(["home"]);
  }
}
