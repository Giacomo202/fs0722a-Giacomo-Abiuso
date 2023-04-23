import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoUtenteComponentComponent } from './nuovo-utente-component.component';

describe('NuovoUtenteComponentComponent', () => {
  let component: NuovoUtenteComponentComponent;
  let fixture: ComponentFixture<NuovoUtenteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovoUtenteComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuovoUtenteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
