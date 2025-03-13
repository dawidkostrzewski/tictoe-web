import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHistoryElementComponent } from './game-history-element.component';

describe('GameHistoryElementComponent', () => {
  let component: GameHistoryElementComponent;
  let fixture: ComponentFixture<GameHistoryElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameHistoryElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameHistoryElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
