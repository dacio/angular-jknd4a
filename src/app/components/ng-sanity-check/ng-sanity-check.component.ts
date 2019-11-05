import { Component, OnInit } from '@angular/core';
import { ComicBooksService} from 'app/comic-books/comic-books.service'

@Component({
  selector: 'app-ng-sanity-check',
  templateUrl: './ng-sanity-check.component.html',
  styleUrls: ['./ng-sanity-check.component.scss']
})
export class NgSanityCheckComponent implements OnInit {

  constructor(private service: ComicBooksService) { }

  ngOnInit() {
  }

}
