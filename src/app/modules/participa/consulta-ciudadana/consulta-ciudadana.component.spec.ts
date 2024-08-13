import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCiudadanaComponent } from './consulta-ciudadana.component';

describe('ConsultaCiudadanaComponent', () => {
  let component: ConsultaCiudadanaComponent;
  let fixture: ComponentFixture<ConsultaCiudadanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaCiudadanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaCiudadanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
