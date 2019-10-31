import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationContainerComponent } from './calculation-container.component';

describe('CalculationContainerComponent', () => {
  let component: CalculationContainerComponent;
  let fixture: ComponentFixture<CalculationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
