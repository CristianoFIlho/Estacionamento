import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})  
export class AppService {
    API_URL = 'http://localhost:3000';
    constructor(private http: HttpClient) { }

    buscaVeiculos(): any{
        return this.http.get(this.API_URL+'/veiculos').pipe(map((response: Response) => {
            return response
        }))
    }

    criaVeiculo(body: any): any{
        return this.http.post(this.API_URL+'/veiculos', body).pipe(map((response: Response) => {
            return response
        }))
    }

}
