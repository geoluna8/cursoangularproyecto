import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

private apiPersonas: string = "http://localhost:8080/api/personas";

  constructor(private http: HttpClient) { }

    public getPersonas() : any {
	    return this.http.get(this.apiPersonas);
    }

    public postPersonas(x) : any {
	    return this.http.post(this.apiPersonas, x);
    } 

    public updatePersonas(y) : any {
	    return this.http.put(this.apiPersonas+"/"+y._id, y);
    }   

    public deletePersonas(z) : any {
	    return this.http.delete(this.apiPersonas+"/"+z._id, z);
    } 

    public getUnaPersonas(w) : any {
	    return this.http.get(this.apiPersonas+"/"+w);
    }         

}
