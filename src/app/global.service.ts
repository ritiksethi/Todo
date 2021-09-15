import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }
  getConfig(){
    const url="https://jsonplaceholder.typicode.com/posts";
    return this.http.get(url);
  }
}
