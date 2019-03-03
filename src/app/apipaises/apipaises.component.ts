import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-apipaises',
  templateUrl: './apipaises.component.html',
  styleUrls: ['./apipaises.component.css']
})
export class ApipaisesComponent implements OnInit {

	public paises: any[];
	public contacto: Object;

  constructor(private paisesService : PaisesService) {
  	this.contacto = {"nombre":"","Ciudad":"","Pais":""};
   }

  ngOnInit() {
  	//this.paises = this._formService.getPaises();
  	this.paisesService.getCountries().subscribe(
      data => { this.paises = data },
      err => console.error(err),
      () => console.log('Paises obtenidos exitosamente')
    );
  }
//https://www.metaltoad.com/blog/angular-5-making-api-calls-httpclient-service
}
