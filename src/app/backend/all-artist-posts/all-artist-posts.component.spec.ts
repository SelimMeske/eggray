import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArtistPostsComponent } from './all-artist-posts.component';

describe('AllArtistPostsComponent', () => {
  let component: AllArtistPostsComponent;
  let fixture: ComponentFixture<AllArtistPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllArtistPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllArtistPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
