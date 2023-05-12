import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPLComponent } from './dashboard-pl.component';

describe('DashboardPLComponent', () => {
  let component: DashboardPLComponent;
  let fixture: ComponentFixture<DashboardPLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
