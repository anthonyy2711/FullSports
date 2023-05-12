import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLgamesComponent } from './plgames.component';

describe('PLgamesComponent', () => {
  let component: PLgamesComponent;
  let fixture: ComponentFixture<PLgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PLgamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PLgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
