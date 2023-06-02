import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialUpdateComponent } from './social-update.component';

describe('SocialUpdateComponent', () => {
  let component: SocialUpdateComponent;
  let fixture: ComponentFixture<SocialUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
