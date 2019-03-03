import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApipaisesComponent } from './apipaises.component';

describe('ApipaisesComponent', () => {
  let component: ApipaisesComponent;
  let fixture: ComponentFixture<ApipaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApipaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApipaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
