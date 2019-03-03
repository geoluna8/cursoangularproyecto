import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChanges2Component } from './test-changes2.component';

describe('TestChanges2Component', () => {
  let component: TestChanges2Component;
  let fixture: ComponentFixture<TestChanges2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestChanges2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestChanges2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
