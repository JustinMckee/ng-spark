import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { BlogItem } from '../../services/blog/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [ BlogService ]
})
export class BlogComponent implements OnInit {

  public blogItems:BlogItem[] = [];
  public loading:boolean = true;

  constructor( private blogService: BlogService ) {}

  ngOnInit() {
    this.loadBlogs();
  }

  private loadBlogs():any {
    this.blogService.getBlogs()
      .mergeMap(blogs => {
        return blogs;
      })
      .subscribe(blog => {
        this.blogService.getSingleBlogViaID(blog.nid)
        .subscribe( res => {
          let item = new BlogItem(res);
          this.blogItems.push(item);
          this.blogItems.sort(this.compare);
        });
      });
    this.loading = false;
  }

  public logBlogsArray() {
    console.log(this.blogItems);
  }

  public compare(a,b):number {
    let aDate:any = new Date(a.created);
    let aTime:any = aDate.getTime();
    let bDate:any = new Date(b.created);
    let bTime:any = bDate.getTime();
    if(aTime > bTime){
      return -1;
    }
    if(aTime < bTime){
      return 1;
    }
    return 0;
  }

}
