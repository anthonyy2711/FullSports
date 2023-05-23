import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsupdateComponent } from './newsupdate.component';

describe('NewsupdateComponent', () => {
  let component: NewsupdateComponent;
  let fixture: ComponentFixture<NewsupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
