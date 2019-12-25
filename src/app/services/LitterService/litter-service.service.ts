import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Litter } from '../../entities/litter';

@Injectable({
  providedIn: 'root'
})
export class LitterService {
  private prodUrl: string = "https://silverkissen20191220122823.azurewebsites.net/"
  private testUrl:string = "https://localhost:44381/";
  private url:string = this.testUrl + "api/catlitters/";
  private activeLittersUrl:string = this.url + "active"; 
  private earlierLittersUrl:string = this.url + "earlier"; 
  constructor(private http: HttpClient) { }

  public getAll() : Observable<Array<Litter>> {
    return this.http.get<Array<Litter>>(this.url);
}
public getLitterById(id: number) : Observable<Litter> {
    return this.http.get<Litter>(this.url+id);
}
public getActiveLitters() : Observable<Array<Litter>> {
    return this.http.get<Array<Litter>>(this.activeLittersUrl);
} 
public getEarlierLitters() : Observable<Array<Litter>> {
    return this.http.get<Array<Litter>>(this.earlierLittersUrl);
} 
}
