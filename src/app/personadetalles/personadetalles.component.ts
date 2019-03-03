import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonasService } from '../personas.service';
import { Personas } from '../persona';

@Component({
  selector: 'app-personadetalles',
  templateUrl: './personadetalles.component.html',
  styleUrls: ['./personadetalles.component.css']
})
export class PersonadetallesComponent implements OnInit {

	public persona = new Personas("","","","","","");

   constructor(private activeRoute: ActivatedRoute, private personasService : PersonasService) {}

    ngOnInit() {
        const queryParams = this.activeRoute.snapshot.queryParams
        const routeParams = this.activeRoute.snapshot.params;

        // do something with the parameters
        console.log(routeParams.id);
        //this.loadUserDetail(routeParams.id);

  	  this.personasService.getUnaPersonas(routeParams.id).subscribe(
      data => { this.persona = data },
      err => console.error(err),
      () => console.log('Persona obtenida exitosamente')
    	); 



    }

}
