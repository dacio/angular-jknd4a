import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiURL: string = 'https://getcomics.info/wp-json/wp/v2/';

@Injectable({
  providedIn: 'root'
})

export class ComicBooksService {

  constructor(private http: HttpClient) { }

  todayDate() {
    let ndate = new Date();
    return ndate;
  }

  getPosts() {
    return this.http.get(apiURL);
  }
}
