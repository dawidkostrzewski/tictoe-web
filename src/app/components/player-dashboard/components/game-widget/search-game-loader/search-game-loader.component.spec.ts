import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGameLoaderComponent } from './search-game-loader.component';

describe('SearchGameLoaderComponent', () => {
  let component: SearchGameLoaderComponent;
  let fixture: ComponentFixture<SearchGameLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchGameLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchGameLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
