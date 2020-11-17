import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {ContentService} from '../services/content.service';
import {GossipList} from '../do/gossipList';
import {Content} from '../do/content';
import {IInfiniteScrollEvent} from 'ngx-infinite-scroll';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  breakpoint: number;
  data: GossipList<Content>;
  list;

  throttle = 300;
  scrollDistance: 1;
  array = [];
  sum = 100;
  constructor(private contentService: ContentService) {
    this.appendItems(0, this.sum);
  }

  ngOnInit() {
    // this.getList();
    //
    // this.breakpoint = (window.innerWidth <= 500) ? 5 : 6;
  }
  onResize(event) {
    // this.breakpoint = (event.target.innerWidth <= 500) ? 5 : 6;
    // console.debug('breakpoint:' + this.breakpoint);
  }

  getList() {
    console.log('hi');
    // this.contentService.contentsByViewCount()
    //     .subscribe((res: any) => {
    //       this.data = res;
    //       console.log(this.data);
    //     });
  }

  onScrollDown($event: IInfiniteScrollEvent) {
    console.log('scrolled down!!', $event);
  }
  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([i, ' ', this.generateWord()].join(''));
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }
  generateWord() {
    return 'abc';
    // return chance.word();
  }
}
