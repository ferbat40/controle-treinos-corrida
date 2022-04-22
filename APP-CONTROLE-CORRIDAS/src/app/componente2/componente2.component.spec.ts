import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COMPONENTE2Component } from './componente2.component';

describe('COMPONENTE2Component', () => {
  let component: COMPONENTE2Component;
  let fixture: ComponentFixture<COMPONENTE2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COMPONENTE2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COMPONENTE2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
