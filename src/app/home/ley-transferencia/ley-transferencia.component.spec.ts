import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyTransferenciaComponent } from './ley-transferencia.component';

describe('LeyTransferenciaComponent', () => {
  let component: LeyTransferenciaComponent;
  let fixture: ComponentFixture<LeyTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyTransferenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
