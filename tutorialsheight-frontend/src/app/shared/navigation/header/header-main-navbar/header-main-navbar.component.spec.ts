import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMainNavbarComponent } from './header-main-navbar.component';

describe('HeaderMainNavbarComponent', () => {
  let component: HeaderMainNavbarComponent;
  let fixture: ComponentFixture<HeaderMainNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMainNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMainNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
