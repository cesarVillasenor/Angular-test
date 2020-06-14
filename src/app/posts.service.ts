import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPosts } from './posts';
import { Observable } from 'rxjs';

@Injectable()
export class PostsService {

  private _url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor( private http:HttpClient ) { }

  getPosts():Observable<IPosts[]>{

    return this.http.get<IPosts[]>(this._url);

}
}
