import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-test-changes2',
  templateUrl: './test-changes2.component.html',
  styleUrls: ['./test-changes2.component.css']
})
export class TestChanges2Component implements OnInit {

@Input('nombre') nombre :string;
@Input('comentario') comentario:string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:{[nombre: string ]: SimpleChange}): void {
    console.log("Cambios:",changes);
  }  

}
