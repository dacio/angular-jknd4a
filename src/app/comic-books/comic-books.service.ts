import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiURL: string = 'https://getcomics.info/wp-json/wp/v2';

@Injectable({
  providedIn: 'root'
})

export class ComicBooksService {
  comicBooks: any = [];

  constructor(private http: HttpClient) { }

  todayDate() {
    let ndate = new Date();
    return ndate;
  }

  getPosts() {
    return this.http.get(`${apiURL}/posts`);
  }

  getComicBooks() {
    this.getPosts()
      .subscribe( data => {
        console.log(data);
        this.comicBooks = data;
      });
  }
}
