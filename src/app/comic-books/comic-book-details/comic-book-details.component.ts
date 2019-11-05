import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ComicBooksService} from 'app/comic-books/comic-books.service'

@Component({
  selector: 'app-comic-book-details',
  templateUrl: './comic-book-details.component.html',
  styleUrls: ['./comic-book-details.component.scss']
})
export class ComicBookDetailsComponent implements OnInit {

  comicBook: any;
  id: any;

  constructor(private activatedRoute: ActivatedRoute, private service: ComicBooksService) {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
  }

  ngOnInit() {
    this.comicBook = this.service.comicBooks.find(x => x.id === parseInt(this.id, null));
  }

}
