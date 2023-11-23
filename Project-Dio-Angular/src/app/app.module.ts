import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuBlogComponent } from './components/menu-blog/menu-blog.component';
import { SubMenuBlogComponent } from './components/sub-menu-blog/sub-menu-blog.component';
import { CardsBlogComponent } from './components/cards-blog/cards-blog.component';
import { HomeComponent } from './pages/home/home.component';
import { TitleMenuComponent } from './components/title-menu/title-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBlogComponent,
    SubMenuBlogComponent,
    CardsBlogComponent,
    HomeComponent,
    TitleMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
