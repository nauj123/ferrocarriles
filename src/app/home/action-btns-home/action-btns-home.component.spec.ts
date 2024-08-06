import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBtnsHomeComponent } from './action-btns-home.component';

describe('ActionBtnsHomeComponent', () => {
  let component: ActionBtnsHomeComponent;
  let fixture: ComponentFixture<ActionBtnsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionBtnsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionBtnsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
