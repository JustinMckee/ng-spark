import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PortfolioService {

  endpoint = 'http://localhost:8888/projects/mysite/admin/api/portfolio?_format=json';
  data: Object;

  constructor( private http: HttpClient ) { }

  getPortfolioItems () {
    return this.http
    .get(this.endpoint)
  }

}
