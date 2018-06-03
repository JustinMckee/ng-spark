import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio',  component: PortfolioComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'services',  component: ServicesComponent },
  { path: 'blog',  component: BlogComponent },
  { path: 'blog/:title',  component: SingleBlogComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    BlogComponent,
    SingleBlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
