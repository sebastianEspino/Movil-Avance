import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 
import { ApiService } from './api.service';
import { ItemEventData } from "@nativescript/core/ui/list-view";

@Component({
  selector: 'citas',
  templateUrl: './citas.html',
  styleUrls: ['./citas.css'],
})

export class CitasComponent {
  citas: any[];
  public constructor(private router: Router,private apiService: ApiService) {
    // Use the component constructor to inject providers.
    this.obtenerTodos();
  }

  public onTap(){
    this.router.navigate(["home"]);
  }

  public obtenerTodos(){
    this.apiService.getRegisters().subscribe((data: any[]) => {
        console.log(data);
        this.citas = data;
    });

  
  }
}