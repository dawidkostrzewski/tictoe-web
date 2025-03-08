import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitesWidgetComponent } from './invites-widget.component';

describe('InvitesWidgetComponent', () => {
  let component: InvitesWidgetComponent;
  let fixture: ComponentFixture<InvitesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvitesWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
