import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaLigaStandingsComponent } from './la-liga-standings.component';

describe('LaLigaStandingsComponent', () => {
  let component: LaLigaStandingsComponent;
  let fixture: ComponentFixture<LaLigaStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaLigaStandingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaLigaStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
