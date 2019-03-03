import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonadetallesComponent } from './personadetalles.component';

describe('PersonadetallesComponent', () => {
  let component: PersonadetallesComponent;
  let fixture: ComponentFixture<PersonadetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonadetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonadetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
