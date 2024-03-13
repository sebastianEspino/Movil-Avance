import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 
import { timeout } from 'rxjs';

@Component({
  selector: 'citas',
  templateUrl: './citas.html',
  styleUrls: ['./citas.css'],
})
export class CitasComponent {
  public constructor(private router: Router) {
    // Use the component constructor to inject providers.
  }

  public onTap(){
    this.router.navigate(["home"]);
  }

  
}
