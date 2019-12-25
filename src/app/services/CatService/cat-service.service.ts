import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../../entities/cat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {
  private testUrl:string = "https://localhost:44381/";
  private prodUrl: string = "https://silverkissen20191220122823.azurewebsites.net/" 
  private url = this.testUrl + "api/cats/";
  constructor(private http: HttpClient) { }

  public getParents() : Observable<Array<Cat>> {
    let parentsUrl = this.url+'parents';
    return this.http.get<Array<Cat>>(parentsUrl);
}

public findById(id: number) : Observable<Cat> {
    let url = this.url + id;
    return this.http.get<Cat>(url);
}
}
