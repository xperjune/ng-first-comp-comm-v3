import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckGraphComponent } from './check-graph.component';

describe('CheckGraphComponent', () => {
  let component: CheckGraphComponent;
  let fixture: ComponentFixture<CheckGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
