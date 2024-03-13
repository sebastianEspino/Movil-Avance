import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 


@Component({
  selector: 'formularioDate',
  templateUrl: './formularioDate.html',
  styleUrls:['./formularioDate.css']

})
export class FormularioDateComponent {
  public constructor(private router: Router) {
    // Use the component constructor to inject providers.
  }
  public onTap(){
    this.router.navigate(["home"]);
  }
  
}
