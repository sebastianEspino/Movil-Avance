import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";
import { ApiService } from './api.service';
import { ItemEventData } from "@nativescript/core/ui/list-view";
import { Dialogs } from '@nativescript/core'

@Component({
    selector: 'productos',
    templateUrl: './productos.html',
    styleUrls: ['./productos.css']
})
export class ProductosComponent {
    public productos: any[];
    public carrito = [];


    public constructor(private router: Router, private apiService: ApiService) {
        // Use the component constructor to inject providers.
        this.obtenerTodos();

    }



    public setProducto(args: ItemEventData) {
        const register = this.productos[args.index];
        this.apiService.getRegisterById(register.id).subscribe((res) => {
            // Agregar el producto al carrito
            this.agregarProductoAlCarrito(res);
            // Mostrar el contenido del carrito en la consola
            console.log("Contenido del carrito después de agregar el producto:", this.carrito);
            // Mostrar los detalles del producto en un cuadro de diálogo
            Dialogs.alert({
                title: 'Detalles!',
                message: `ID: ${res.id}\nNOMBRE: ${res.nombre}\nDESCRCIPCIÓN: ${res.descripcion_producto} `,
                okButtonText: 'OK',
                cancelable: true,
            });
            console.info(res);
        });
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

    //Esta funcion elimina el producto al agregarlo al carrito



    public agregarProductoAlCarrito(res) {
        this.carrito.push(res)
    }
}
