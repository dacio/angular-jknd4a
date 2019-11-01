import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comic-book-details',
  templateUrl: './comic-book-details.component.html',
  styleUrls: ['./comic-book-details.component.scss']
})
export class ComicBookDetailsComponent implements OnInit {

  comicBooks = [
    {
      id: 10,
      prodName: 'iPhone X',
      prodDesc: 'New iPhone X with 5.5 inch screen, 256GB Internal Memory, 16GB RAM',
      prodPrice: 989
    },
    {
      id: 11,
      prodName: 'Pixel 2 XL',
      prodDesc: 'New Google Pixel 2 XL with 5.5 inch screen, 256GB Internal Memory, 16GB RAM',
      prodPrice: 788
    },
    {
      id: 12,
      prodName: 'Samsung S10',
      prodDesc: 'New Samsung S10 with 5.5 inch screen, 256GB Internal Memory, 16GB RAM',
      prodPrice: 989
    }
  ];
  comicBook: any;
  id: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
  }

  ngOnInit() {
    console.log(this.comicBook);
    this.comicBook = this.comicBooks.find(x => x.id === parseInt(this.id, null));
    console.log(this.comicBook);
  }

}
