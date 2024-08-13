import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedDePrestadoresComponent } from './red-de-prestadores.component';

describe('RedDePrestadoresComponent', () => {
  let component: RedDePrestadoresComponent;
  let fixture: ComponentFixture<RedDePrestadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedDePrestadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedDePrestadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
