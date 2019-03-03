import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Personas } from '../persona';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-formapi',
  templateUrl: './formapi.component.html',
  styleUrls: ['./formapi.component.css']
})
export class FormapiComponent implements OnInit {

	public personas: any[];
	public paises: any[];
	public nuevaPersona = new Personas("","","","","","");
	public editarPersona = new Personas("","","","","","");

  constructor(private personasService : PersonasService, private paisesService : PaisesService) { }

  ngOnInit() {

  	this.verPersonas();

     this.paisesService.getCountries().subscribe(
      data => { this.paises = data },
      err => console.error(err),
      () => console.log('Paises obtenidos exitosamente')
    );

  }

  guardarPersona(x): void{
  	//console.log(x);
  	this.personasService.postPersonas(x).subscribe(
      data => { console.log(data) },
      err => console.error(err),
      () => {this.verPersonas(); console.log('Persona agregada exitosamente')}
    );
  }

  verPersonas(): void{
  	this.personasService.getPersonas().subscribe(
      data => { this.personas = data },
      err => console.error(err),
      () => console.log('Personas obtenidas exitosamente')
    );
  }

  edicion(z): void{
  	this.editarPersona = z;
  }

  updatePersona(y) : void{
  	//console.log(y);
  	this.personasService.updatePersonas(y).subscribe(
      data => { console.log(data) },
      err => console.error(err),
      () => {this.verPersonas(); console.log('Persona actualizada exitosamente')}
    );  	
  }

  borrarPersona(d): void{
  	//console.log(d);
  	this.personasService.deletePersonas(d).subscribe(
      data => { console.log(data) },
      err => console.error(err),
      () => {this.verPersonas(); console.log('Persona eliminada exitosamente')}
    );   	
  }


}
