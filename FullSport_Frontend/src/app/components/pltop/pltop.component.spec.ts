import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLTopComponent } from './pltop.component';

describe('PLTopComponent', () => {
  let component: PLTopComponent;
  let fixture: ComponentFixture<PLTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PLTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PLTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
