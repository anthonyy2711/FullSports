import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementUsersComponent } from './management-users.component';

describe('ManagementUsersComponent', () => {
  let component: ManagementUsersComponent;
  let fixture: ComponentFixture<ManagementUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
