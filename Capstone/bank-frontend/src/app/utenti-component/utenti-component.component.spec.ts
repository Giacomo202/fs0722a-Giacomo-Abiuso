import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtentiComponentComponent } from './utenti-component.component';

describe('UtentiComponentComponent', () => {
  let component: UtentiComponentComponent;
  let fixture: ComponentFixture<UtentiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtentiComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtentiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
