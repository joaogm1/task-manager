import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTaskComponent } from './navbar-task.component';

describe('NavbarTaskComponent', () => {
  let component: NavbarTaskComponent;
  let fixture: ComponentFixture<NavbarTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
