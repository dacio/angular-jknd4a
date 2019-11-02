import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ComicBooksService} from '../comic-books.service'

@Component({
  selector: 'app-comic-book-list',
  templateUrl: './comic-book-list.component.html',
  styleUrls: ['./comic-book-list.component.scss']
})
export class ComicBookListComponent implements OnInit {

  comicBooks: any = [];

  constructor(private router: Router, private route: ActivatedRoute, private service: ComicBooksService) { }

  ngOnInit() {
    console.log(this.service.todayDate());
    this.getComicBooks();
  }

  getComicBooks() {
    this.service.getPosts()
      .subscribe( data => {
        console.log(data);
        this.comicBooks = data;
      });
  }

  gotoDetails(id: any) {
    this.router.navigate([id], { relativeTo: this.route });
  }

}
