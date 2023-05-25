import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishTeamsComponent } from './spanish-teams.component';

describe('SpanishTeamsComponent', () => {
  let component: SpanishTeamsComponent;
  let fixture: ComponentFixture<SpanishTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanishTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpanishTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
