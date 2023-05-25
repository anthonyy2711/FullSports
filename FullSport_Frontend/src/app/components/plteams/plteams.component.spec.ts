import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLTeamsComponent } from './plteams.component';

describe('PLTeamsComponent', () => {
  let component: PLTeamsComponent;
  let fixture: ComponentFixture<PLTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PLTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PLTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
