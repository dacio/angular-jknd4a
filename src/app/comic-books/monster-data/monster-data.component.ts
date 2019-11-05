import _ from 'lodash';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ComicBooksService} from 'app/comic-books/comic-books.service'

@Component({
  selector: 'app-monster-data',
  templateUrl: './monster-data.component.html',
  styleUrls: ['./monster-data.component.scss']
})
export class MonsterDataComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: ComicBooksService) { }

  ngOnInit() {
    this.service.getMonsterData();
  }

  inProgress() {
    return _.isUndefined(this.service.monsterData)
  }

}
