import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://10.171.68.189:8000/proyectico/api/1.0';

  constructor(private http: HttpClient) { }

  getRegisters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Citas`);
  }

  getRegisterById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Citas/${id}/`);
  }

  addRegister(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Citas`, post);
  }

  updateRegister(id: number, post: any): Observable<any> {
    console.log(`datos: ${post.nombre_cat} - ${post.desc}`)
    return this.http.put<any>(`${this.apiUrl}/Citas/${id}/`, post);
  }

  deleteRegister(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Citas/${id}/`);
  }

  
}