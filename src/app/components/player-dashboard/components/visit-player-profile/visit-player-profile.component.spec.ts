import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitPlayerProfileComponent } from './visit-player-profile.component';

describe('VisitPlayerProfileComponent', () => {
  let component: VisitPlayerProfileComponent;
  let fixture: ComponentFixture<VisitPlayerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitPlayerProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitPlayerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
