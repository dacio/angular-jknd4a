import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ComicBooksService {

  constructor() { }

  todayDate() {
    let ndate = new Date();
    return ndate;
  }
}
