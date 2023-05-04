import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAddComponent } from './social-add.component';

describe('SocialAddComponent', () => {
  let component: SocialAddComponent;
  let fixture: ComponentFixture<SocialAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
