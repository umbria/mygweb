import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentService} from '../services/content.service';
import {Content} from '../do/content';

@Component({
    selector: 'app-content-detail',
    templateUrl: './content-detail.component.html',
    styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
    content: Content;
    tiles: Tile[] = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];
    private contentId;

    constructor(private route: ActivatedRoute,
                private contentService: ContentService) {
        this.route.paramMap.subscribe(params => {
            this.contentId = params.get('contentId');
            // window.alert(this.contentId);

        });
    }

    ngOnInit(): void {
        this.getContent();
    }

    private getContent() {
        this.contentService.contentsById(this.contentId)
            .subscribe( (res: any) => {
                this.content = res;
                console.log (this.content);
            });
    }
}

export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
}
