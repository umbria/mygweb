import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../do/content';



@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  private _content;
  @Input()
  set content(content: Content ) {
    this._content = content;
  }

  get content(): Content { return this._content; }
  data = []
  constructor() { }

  ngOnInit() {
  }

}
