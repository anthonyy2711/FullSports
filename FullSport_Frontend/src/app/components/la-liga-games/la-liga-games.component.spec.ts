import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaLigaGamesComponent } from './la-liga-games.component';

describe('LaLigaGamesComponent', () => {
  let component: LaLigaGamesComponent;
  let fixture: ComponentFixture<LaLigaGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaLigaGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaLigaGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
