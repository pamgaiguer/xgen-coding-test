import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/';

@Injectable({
  providedIn: 'root',
})
export class MarvelApiService {
  private apiUrl = 'https://gateway.marvel.com/v1/public/';
  private publicKey = '6e7849727ef1ce49060ed8beef58a0ee';
  private privateKey = 'de4efe8fa697de2d07ff46f9eb7563a06870a561';

  timestamp = Date.now();
  hash = Md5.hashStr(this.timestamp + this.privateKey + this.publicKey);

  constructor(private http: HttpClient) {}

  getCharacters() {
    const url = `${this.apiUrl}characters?apikey=${this.publicKey}&ts=${this.timestamp}&hash=${this.hash}`;
    return this.http.get(url);
  }
  getCreators() {
    const url = `${this.apiUrl}creators?apikey=${this.publicKey}&ts=${this.timestamp}&hash=${this.hash}`;
    return this.http.get(url);
  }
  getComics() {
    const url = `${this.apiUrl}comics?apikey=${this.publicKey}&ts=${this.timestamp}&hash=${this.hash}`;
    return this.http.get(url);
  }
  getEvents() {
    const url = `${this.apiUrl}events?apikey=${this.publicKey}&ts=${this.timestamp}&hash=${this.hash}`;
    return this.http.get(url);
  }
  getSeries() {
    const url = `${this.apiUrl}series?apikey=${this.publicKey}&ts=${this.timestamp}&hash=${this.hash}`;
    return this.http.get(url);
  }
  getSerie(id: string) {
    const url = `${this.apiUrl}series/${id}?apikey=${this.publicKey}&ts=${this.timestamp}&hash=${this.hash}`;
    return this.http.get(url);
  }
  getStories() {
    const url = `${this.apiUrl}stories?apikey=${this.publicKey}&ts=${this.timestamp}&hash=${this.hash}`;
    return this.http.get(url);
  }
}
