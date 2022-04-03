import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCatComponent } from './afficher-cat.component';

describe('AfficherCatComponent', () => {
  let component: AfficherCatComponent;
  let fixture: ComponentFixture<AfficherCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
