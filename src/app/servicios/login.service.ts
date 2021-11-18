import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario';


@Injectable({providedIn: 'root'})
export class LoginService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiServerUrl}/Usuario/all/`);
  }

  public addUsuario(Usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiServerUrl}/Usuario/add`, Usuario);
  }

  public updateUsuario(Usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiServerUrl}/Usuario/update`, Usuario);
  }

  public deleteUsuario(UsuarioId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/Usuario/delete/${UsuarioId}`);
  }
}