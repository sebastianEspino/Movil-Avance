import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@nativescript/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
    apiUrl = 'http://10.171.64.17:8000/api/1.0';
    private storage: Storage;

  constructor(private http: HttpClient) {
    this.storage = new Storage();
  }


  addToCart(product: any): void {
    const cart = this.storage.getItem('cart') || [];
    cart.push(product);
    this.storage.setItem('cart', cart);
  }

  getCart(): any[] {
    return this.storage.getItem('cart') || [];
  }

  getRegisters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Productos/`);
  }

  getRegisterById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Productos/${id}/`);
  }

  addRegister(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Productos/`, post);
  }

  updateRegister(id: number, post: any): Observable<any> {
    console.log(`datos: ${post.nombre_cat} - ${post.desc}`)
    return this.http.put<any>(`${this.apiUrl}/Productos/${id}/`, post);
  }

  deleteRegister(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Productos/${id}/`);
  }
  setItem(key: string, value: any): Promise<void> {
    return this.storage.setItem(key, value);
  }
}