import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicBooksComponent } from './comic-books/comic-books.component';
import { ComicBookDetailsComponent } from './comic-book-details/comic-book-details.component';
import { ComicBookListComponent } from './comic-book-list/comic-book-list.component';
import { CanDeactivateGuard } from '../can-deactivate.guard';

// const routes: Routes = [
//   { path: 'comic-books', component: ComicBooksComponent },
//   { path: 'comic-book/:id', component: ComicBookDetailsComponent }
// ];
const routes: Routes = [
  {
    path: 'comic-books',
    component: ComicBooksComponent,
    children: [{
      path: '',
      component: ComicBookListComponent,
    }, {
      path: ':id',
      component: ComicBookDetailsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicBooksRoutingModule { }
