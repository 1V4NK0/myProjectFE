import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {

  constructor(private httpClient: HttpClient) {}

  getRandomQuote(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/api/random');
  }

  getQuoteOfTheDay(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/api/today');
  }

  //if return observable of type any it causes it to crash as it expects blob type, so u need to return blob
  //because blob is made for images basically
  getInspirationalImg(): Observable<Blob> {
    return this.httpClient.get('http://localhost:3000/api/image', {responseType: "blob"});
  }
}
