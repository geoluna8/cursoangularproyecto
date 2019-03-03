import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEventComponent } from './boton-event.component';

describe('BotonEventComponent', () => {
  let component: BotonEventComponent;
  let fixture: ComponentFixture<BotonEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
