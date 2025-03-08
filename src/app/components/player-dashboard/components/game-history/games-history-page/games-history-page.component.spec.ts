import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesHistoryPageComponent } from './games-history-page.component';

describe('GamesHistoryPageComponent', () => {
  let component: GamesHistoryPageComponent;
  let fixture: ComponentFixture<GamesHistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesHistoryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
