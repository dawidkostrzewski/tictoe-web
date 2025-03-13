import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteListElementComponent } from './invite-list-element.component';

describe('InviteListElementComponent', () => {
  let component: InviteListElementComponent;
  let fixture: ComponentFixture<InviteListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteListElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
