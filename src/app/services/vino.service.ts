import { Injectable } from '@angular/core';
import { Vino } from '../model/Vino';
import { Observable, Subject } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class vinoService {

  private url = 'http://localhost:3000/api/wine';
  constructor(private http: HttpClient) {  }

  /* ******************** OBTENGO LA LISTA DE VINOS ******************** */
  getWinesService(query: string): Observable<Vino[]> {
    return this.http.get<Vino[]>(this.url, {
      params: {q: query}
    });
  }

  /* ******************** OBTENGO VINO POR ID ******************** */
  getWineByIdService(id: string): Observable<Vino> {
    return this.http.get<Vino>(`${this.url}/${id}`);   
  }  

  /* ******************** CREO UN NUEVO VINO ******************** */
  createWineService(vino: Vino): Observable<Vino> {
    return this.http.post<Vino>(this.url, vino);
  }

  /* ******************** CAMBIO LA CANTIDAD DEL VINO ******************** */

  changeQuantityService(vinoId: number, changeInQuantity: number): Observable<any> {
    return this.http.patch(this.url +'/'+ vinoId, {changeInQuantity: changeInQuantity});
  }

}
