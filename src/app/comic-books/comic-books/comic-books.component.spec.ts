import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicBooksComponent } from './ComicBooks.component';

describe('ComicBooksComponent', () => {
  let component: ComicBooksComponent;
  let fixture: ComponentFixture<ComicBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
