import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

	private apiPaises: string = "https://restcountries.eu/rest/v2/all";
	//public paises: Array<string> = ["Mexico","USA","Inglaterra","Espana","Puerto Rico"];

  constructor(private http: HttpClient) { }

    public getCountries() : any {
	    return this.http.get(this.apiPaises);
    }

      //public getPaises(): string[] {
    //return this.paises;
  //}

}
