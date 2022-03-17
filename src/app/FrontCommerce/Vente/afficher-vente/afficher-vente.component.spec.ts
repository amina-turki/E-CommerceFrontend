import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherVenteComponent } from './afficher-vente.component';

describe('AfficherVenteComponent', () => {
  let component: AfficherVenteComponent;
  let fixture: ComponentFixture<AfficherVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
