import { Component, OnInit } from '@angular/core';
import { Empleado, Estado_Civil } from '../empleado';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

public empleado = new Empleado(Math.random(),"","","","","",false,null);

public estadosCiviles: Estado_Civil[] = [
  {
    id:1,
    estado: "Soltero"
  },
  {
    id:2,
    estado:"Casado"
  },
  {
    id:3,
    estado:"Divorciado"
  },
  {
    id:4,
    estado:"Viudo"
  }
];

public departamentos: string[] = [
"IT","CUSTOMER SERVICES","RRHH","VENTAS","FINANZAS","AUDITORIAS"
];

public enviado: boolean = false;

public OnSubmit(empleado: Empleado){
    this.enviado = true;
    console.log(empleado);
  }


  constructor() {

   }

  ngOnInit() {

  }

}
