import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 

@Component({
  selector: 'editarPerfil',
  templateUrl: './editarPerfil.html',
  styleUrls:['./editarPerfil.css']
})
export class EditarPerfilComponent {
  public constructor(private router: Router) {
    // Use the component constructor to inject providers.
  }

  public onTap(){
    this.router.navigate(["home"]);
  }
}