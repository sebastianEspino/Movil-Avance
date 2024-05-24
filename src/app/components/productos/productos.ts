import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";
import { ApiService } from 'src/app/components/carrito/carrito.service';
import { ItemEventData } from "@nativescript/core/ui/list-view";
import { Dialogs } from '@nativescript/core'

@Component({
    selector: 'productos',
    templateUrl: './productos.html',
    styleUrls: ['./productos.css']
})
export class ProductosComponent {
    productos: any[];

    public constructor(private router: Router, private apiService: ApiService) {
        // Use the component constructor to inject providers.
        this.obtenerTodos();
    }


    public onTap() {
        this.router.navigate(["home"]);
    }
    public obtenerTodos() {
        this.apiService.getRegisters().subscribe((data: any[]) => {
            console.log(data);
            this.productos = data;
        });

    }

    public onItemTap(args: ItemEventData) {
        let register = this.productos[args.index]
        this.apiService.getRegisterById(register.id).subscribe((res) => {
            Dialogs.alert({
                title: 'Detalles!',
                message: `ID: ${res.id}\nNOMBRE: ${res.nombre}\nDESCRCIPCIÓN: ${res.descripcion_producto} `,
                okButtonText: 'OK',
                cancelable: true,
            });
            console.info(res)
        });
    }


    addToCart(producto: any): void {
        this.apiService.addToCart(producto);
      }
}
