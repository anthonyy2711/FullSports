import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLStandingsComponent } from './plstandings.component';

describe('PLStandingsComponent', () => {
  let component: PLStandingsComponent;
  let fixture: ComponentFixture<PLStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PLStandingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PLStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
