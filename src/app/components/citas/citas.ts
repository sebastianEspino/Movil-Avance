import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 
import { ApiService } from './api.service';
import { ItemEventData } from "@nativescript/core/ui/list-view";
import { Dialogs } from '@nativescript/core';

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

  public eliminarCat(item){
    Dialogs.confirm({
        title: 'Confirmación',
        message: `Está seguro de eliminar esta cita ? ${item.fechaServicio}`,
        okButtonText: 'SI',
        cancelButtonText: 'No',
        neutralButtonText: 'Cancelar',
        })
        .then((result) => {
            console.log(result);
            if (result){
                this.apiService.deleteRegister(item.id).subscribe((res: string) => {
                    Dialogs.alert({
                        title: 'Respuesta:',
                        message: "Categoría eliminada correctamente!!",
                        okButtonText: 'OK',
                        cancelable: true,
                    });
                    this.obtenerTodos();
                },error => {
                    console.log(error.status)
                    if (error.status == 400){
                        Dialogs.alert({
                            title: 'Respuesta:',
                            message: error.error.message,
                            okButtonText: 'OK',
                            cancelable: true,
                        });
                    }
                    else{
                        Dialogs.alert({
                            title: 'Respuesta:',
                            message: error.message,
                            okButtonText: 'OK',
                            cancelable: true,
                        });
                    }

                });
            }
        });


        

}

public editarCat(item){
  console.log(`Editar cat: ${item.id}`)
  this.router.navigate(['tienda-editar'], { queryParams: { id: item.id } });
}


}