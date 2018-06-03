import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogItem } from './blog.model';

@Injectable()
export class BlogService {

  constructor( private _http:HttpClient ) { }

  public getBlogs ():any {
    let _url = 'http://mysite.admin:8888/rest-articles/?_format=json';
    return this._http
      .get(_url);
  }

  public getSingleBlogViaID (nid:number):any {
    let _url = 'http://mysite.admin:8888/node/'+nid+'/?_format=json';
    return this._http
      .get<BlogItem>(_url);
  }

  public getSingleBlogViaPath (path:string):any {
    let _url = 'http://mysite.admin:8888/'+path+'/?_format=json';
    return this._http
      .get<BlogItem>(_url);
  }

}
