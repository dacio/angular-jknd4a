import _ from 'lodash';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ComicBooksService} from 'app/comic-books/comic-books.service'

@Component({
  selector: 'app-comic-book-list',
  templateUrl: './comic-book-list.component.html',
  styleUrls: ['./comic-book-list.component.scss']
})
export class ComicBookListComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: ComicBooksService) { }

  ngOnInit() {
    console.log(_.toLower('ASFs fasfsf'));
    this.service.getComicBooks();
  }

  gotoDetails(id: any) {
    this.router.navigate([id], { relativeTo: this.route });
  }

}
