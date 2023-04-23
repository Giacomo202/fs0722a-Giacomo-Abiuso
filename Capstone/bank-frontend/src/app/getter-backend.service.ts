import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utenti } from './utenti';
import { Conti } from './conti';
import { Movimenti } from './movimenti';

@Injectable({
  providedIn: 'root'
})
export class GetterBackendService {

  constructor(private http: HttpClient) { }

  getAllUtenti():Observable<Utenti[]> {
    return this.http.get<Utenti[]>('http://localhost:9000/utenti/getAll')
  }

  getAllConti():Observable<Conti[]>{
    return this.http.get<Conti[]>('http://localhost:9000/conti/getAll')
  }

  getAllMovimenti():Observable<Movimenti[]>{
    return this.http.get<Movimenti[]>('http://localhost:9000/movimenti/getAll')
  }

  creaUtente(nuovoUtente: Utenti): Observable<any> {
    return this.http.post<any>('http://localhost:9000/utenti', nuovoUtente);
  }




}
