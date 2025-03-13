import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortGameHistoryComponent } from './short-game-history.component';

describe('ShortGameHistoryComponent', () => {
  let component: ShortGameHistoryComponent;
  let fixture: ComponentFixture<ShortGameHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortGameHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortGameHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
