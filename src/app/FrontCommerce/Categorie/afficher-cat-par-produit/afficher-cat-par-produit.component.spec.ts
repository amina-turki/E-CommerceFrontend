import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCatParProduitComponent } from './afficher-cat-par-produit.component';

describe('AfficherCatParProduitComponent', () => {
  let component: AfficherCatParProduitComponent;
  let fixture: ComponentFixture<AfficherCatParProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherCatParProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherCatParProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
