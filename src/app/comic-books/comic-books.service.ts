import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiURL: string = 'https://getcomics.info/wp-json/wp/v2';
const monsterApi: string = 'https://api-grid.monsterenergy.com/api/home'

@Injectable({
  providedIn: 'root'
})

export class ComicBooksService {
  comicBooks: any = undefined;
  monsterData: any = undefined;

  constructor(private http: HttpClient) { }

  todayDate() {
    let ndate = new Date();
    return ndate;
  }

  getPosts() {
    return this.http.get(`${apiURL}/posts`);
  }

  getData() {
    return this.http.get(monsterApi);
  }

  getComicBooks() {
    this.getPosts()
      .subscribe( data => {
        console.log(data);
        this.comicBooks = data;
      });
  }

  getMonsterData() {
    this.getData()
      .subscribe( data => {
        this.monsterData = data;
      })
  }
}
