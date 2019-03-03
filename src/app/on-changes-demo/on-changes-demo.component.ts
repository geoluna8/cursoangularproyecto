import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-on-changes-demo',
  templateUrl: './on-changes-demo.component.html',
  styleUrls: ['./on-changes-demo.component.css']
})
export class OnChangesDemoComponent implements OnInit {

  nombre: string;
  comentario: string;

  constructor() { }

  ngOnInit() {
  	this.comentario = "Soy un comentario";
    this.nombre = "Geovanny";
  }

  asignarValores(nombreNuevo, comentarioNuevo): void{
    this.nombre = nombreNuevo.value;
    this.comentario = comentarioNuevo.value;
  } 

    suscribirme($event){
    console.log("cambio estado",$event);
  }

}
