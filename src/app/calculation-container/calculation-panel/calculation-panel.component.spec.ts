import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationPanelComponent } from './calculation-panel.component';

describe('CalculationPanelComponent', () => {
  let component: CalculationPanelComponent;
  let fixture: ComponentFixture<CalculationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
