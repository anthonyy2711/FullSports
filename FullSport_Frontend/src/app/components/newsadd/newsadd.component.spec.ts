import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsaddComponent } from './newsadd.component';

describe('NewsaddComponent', () => {
  let component: NewsaddComponent;
  let fixture: ComponentFixture<NewsaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
