import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresGestionComponent } from './indicadores-gestion.component';

describe('IndicadoresGestionComponent', () => {
  let component: IndicadoresGestionComponent;
  let fixture: ComponentFixture<IndicadoresGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicadoresGestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicadoresGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
