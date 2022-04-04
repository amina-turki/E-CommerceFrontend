import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercatComponent } from './modifiercat.component';

describe('ModifiercatComponent', () => {
  let component: ModifiercatComponent;
  let fixture: ComponentFixture<ModifiercatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiercatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiercatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
