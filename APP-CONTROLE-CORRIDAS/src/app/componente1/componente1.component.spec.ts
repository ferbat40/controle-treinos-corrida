import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COMPONENTE1Component } from './componente1.component';

describe('COMPONENTE1Component', () => {
  let component: COMPONENTE1Component;
  let fixture: ComponentFixture<COMPONENTE1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COMPONENTE1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COMPONENTE1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
