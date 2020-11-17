import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {GossipList} from '../do/gossipList';
import {Content} from '../do/content';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
// tslint:disable-next-line:max-line-length
const contentsByViewCountUrl = 'http://localhost:8300/contentsByViewCount?refViewCount=10&startPage=1&pageSize=30&sortBy=refcreatedon&order=desc';
const contentById = 'http://localhost:8300/content?id=';
@Injectable({
  providedIn: 'root'
})
export class ContentService {


  constructor(private http: HttpClient) { }

  public contentsByViewCount() {
    return this.http.get<GossipList<Content>>(`${contentsByViewCountUrl}`)
        .pipe(
            tap(cases => console.log('fetched cases')),
            catchError(this.handleError('getCases', []))
        );
  }

  /**
   * retrieve content by id
   * @param id  content id
   */
  public contentsById(id: number ) {
    const url = contentById + id;
    console.info(url);
    return this.http.get<Content>(contentById + id)
        .pipe(
            tap(cases => console.log('fetched cases')),
            catchError(this.handleError('getCases', []))
        );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
