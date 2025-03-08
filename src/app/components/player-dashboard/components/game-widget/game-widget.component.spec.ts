import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWidgetComponent } from './game-widget.component';

describe('GameWidgetComponent', () => {
  let component: GameWidgetComponent;
  let fixture: ComponentFixture<GameWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
