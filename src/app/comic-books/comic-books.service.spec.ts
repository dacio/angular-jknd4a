import { TestBed } from '@angular/core/testing';

import { ComicBooksService } from './comic-books.service';

describe('ComicBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComicBooksService = TestBed.get(ComicBooksService);
    expect(service).toBeTruthy();
  });
});
