import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FattiComponent } from './fatti.component';

describe('FattiComponent', () => {
  let component: FattiComponent;
  let fixture: ComponentFixture<FattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FattiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
