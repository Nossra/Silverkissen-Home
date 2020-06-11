import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Litter } from '../../entities/litter'; 
import { catchError } from 'rxjs/operators'

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
        return this.http.get<Array<Litter>>(this.url)
            // .pipe(catchError(this.handleError));
    }
    public getLitterById(id: number) : Observable<Litter> {
        return this.http.get<Litter>(this.url+id)
            // .pipe(catchError(this.handleError));
    }
    public getActiveLitters() : Observable<Array<Litter>> {
        return this.http.get<Array<Litter>>(this.activeLittersUrl)
            // .pipe(catchError(this.handleError));
    } 
    public getEarlierLitters() : Observable<Array<Litter>> {
        return this.http.get<Array<Litter>>(this.earlierLittersUrl) 
            // .pipe(catchError(this.handleError));
    } 

    // private handleError(error) {
    //     let errorMessage = "";
    //     if (error.error instanceof ErrorEvent) {
    //         errorMessage = 'Error: '+ error.error.message;
    //     } else{
    //         errorMessage = 'Error code: ' + error.status + '\nMessage: '+error.message;
    //     } 
    //     return throwError(errorMessage);
    // }
    
    // private errorHandler(errorResponse) {
    //     return errorResponse.statusText;
    // }

}
