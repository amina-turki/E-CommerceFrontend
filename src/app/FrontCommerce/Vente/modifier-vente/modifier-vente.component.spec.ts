import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierVenteComponent } from './modifier-vente.component';

describe('ModifierVenteComponent', () => {
  let component: ModifierVenteComponent;
  let fixture: ComponentFixture<ModifierVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
