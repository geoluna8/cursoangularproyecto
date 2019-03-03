import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-event',
  templateUrl: './boton-event.component.html',
  styleUrls: ['./boton-event.component.css']
})
export class BotonEventComponent implements OnInit {
  @Output('click-suscripcion') public suscripcionBoton = new EventEmitter();
  estaSuscrito: boolean;

  constructor() { }

  ngOnInit() {
  	this.estaSuscrito = false;
  }

  suscripcion(): void{
    this.estaSuscrito = !this.estaSuscrito;
    this.suscripcionBoton.emit({"estado":this.estaSuscrito,"usuario":"Geovanny"});
  }

}
