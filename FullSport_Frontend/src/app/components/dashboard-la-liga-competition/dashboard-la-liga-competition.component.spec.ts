import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLaLigaCompetitionComponent } from './dashboard-la-liga-competition.component';

describe('DashboardLaLigaCompetitionComponent', () => {
  let component: DashboardLaLigaCompetitionComponent;
  let fixture: ComponentFixture<DashboardLaLigaCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLaLigaCompetitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLaLigaCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
