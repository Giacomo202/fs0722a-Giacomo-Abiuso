import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContiComponentComponent } from './conti-component.component';

describe('ContiComponentComponent', () => {
  let component: ContiComponentComponent;
  let fixture: ComponentFixture<ContiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContiComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
