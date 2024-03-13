import { Router } from "@angular/router"; 
import { Component, OnInit } from '@angular/core'


@Component({
    selector: 'landing',
    templateUrl: './landing.html',
  })
  export class LandingComponent {
    public constructor(private router: Router) {
      // Use the component constructor to inject providers.
    }
    public onTap(){
        this.router.navigate(["home"]);
      }
}