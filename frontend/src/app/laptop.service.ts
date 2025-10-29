import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Laptop } from './laptop.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LaptopService {


  private http = inject(HttpClient);
  private URLbase= environment.apiURL + '/api/laptops';

  public obtenerTodos():Observable<Laptop[]>{
    return this.http.get<Laptop[]>(this.URLbase)
  }

  public obtenerPorId(id:number): Observable<Laptop>{
    return this.http.get<Laptop>(`${this.URLbase}/${id}`);
  }

public obtenerPorIdYNombre(id:number,nombre:string):Observable<Laptop[]>{
  return this.http.get<Laptop[]>(`${this.URLbase}/ObtenerLaptopPorIdYNombre?id=${id}&nombre=${nombre}`);
}

  public crear(laptop: Laptop){
    return this.http.post(this.URLbase, laptop);
  }

  public actualizar(id:number,laptop:Laptop){
    return this.http.put(`${this.URLbase}/${id}`,laptop);
  }

  public borrar(id:number){
      return this.http.delete(`${this.URLbase}/${id}`);
  }

}
