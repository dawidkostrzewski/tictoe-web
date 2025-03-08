import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsListElementComponent } from './friends-list-element.component';

describe('FriendsListElementComponent', () => {
  let component: FriendsListElementComponent;
  let fixture: ComponentFixture<FriendsListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendsListElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendsListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
