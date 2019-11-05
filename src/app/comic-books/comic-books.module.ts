import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicBooksRoutingModule } from './comic-books-routing.module';
import { ComicBooksComponent } from './comic-books/comic-books.component';
import { ComicBookDetailsComponent } from './comic-book-details/comic-book-details.component';
import { ComicBookListComponent } from './comic-book-list/comic-book-list.component';

@NgModule({
  declarations: [ComicBooksComponent, ComicBookDetailsComponent, ComicBookListComponent],
  imports: [
    CommonModule,
    ComicBooksRoutingModule
  ]
})
export class ComicBooksModule { }
