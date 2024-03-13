import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 

@Component({
  selector: 'producto_vista',
  templateUrl: './producto_vista.html',
  styleUrls: ['./producto_vista.css'],
})
export class Producto_VistaComponent {
  public constructor(private router: Router) {
    // Use the component constructor to inject providers.
  }
  public onTap(){
    this.router.navigate(["home"]);
  }
}