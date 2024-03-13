import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  public constructor(private router: Router) {
    // Use the component constructor to inject providers.
  }

 
}