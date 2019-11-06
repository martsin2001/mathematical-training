import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDialigComponent } from './history-dialig.component';

describe('HistoryDialigComponent', () => {
  let component: HistoryDialigComponent;
  let fixture: ComponentFixture<HistoryDialigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryDialigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDialigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
