import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicBookDetailsComponent } from './comic-book-details.component';

describe('ComicBookDetailsComponent', () => {
  let component: ComicBookDetailsComponent;
  let fixture: ComponentFixture<ComicBookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicBookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
