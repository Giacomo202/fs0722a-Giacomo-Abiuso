import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentiComponentComponent } from './movimenti-component.component';

describe('MovimentiComponentComponent', () => {
  let component: MovimentiComponentComponent;
  let fixture: ComponentFixture<MovimentiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentiComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimentiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
