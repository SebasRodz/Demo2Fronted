import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empresas } from './empresas';


@Injectable({providedIn: 'root'})
export class EmpresaService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getEmpresas(): Observable<Empresas[]> {
    return this.http.get<Empresas[]>(`${this.apiServerUrl}/Empresas/all/`);
  }

}