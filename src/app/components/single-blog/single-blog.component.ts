import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { BlogService } from '../../services/blog/blog.service';
import { BlogItem } from '../../services/blog/blog.model';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss'],
  providers: [ BlogService ]
})
export class SingleBlogComponent implements OnInit {
  public title: string;
  public path: string;
  public blogItem: BlogItem;

  constructor( private route:ActivatedRoute, private blogService: BlogService) {
    route.params.subscribe(params => {
      this.title = params['title'];
    });
    this.path = window.location.pathname;
   }

  ngOnInit() {
    this.loadSingleBlog();
  }

  public loadSingleBlog():any {
    this.blogService.getSingleBlogViaPath(this.path)
      .subscribe( blog => {
        this.blogItem = new BlogItem(blog);
      });
  }

}
