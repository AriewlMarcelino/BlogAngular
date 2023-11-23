import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-blog',
  templateUrl: './cards-blog.component.html',
  styleUrls: ['./cards-blog.component.css']
})
export class CardsBlogComponent{

  @Input() label:string = '';


  titleMenu1:string = 'Title-card-1';
  subTitleCard:string = 'title-card-1';
  TextCard:string = "Some quick example text to build on the card title and make up the bulk of the card's content"


  titleMenu2:string = 'Title-card-2';
  subTitleCard2:string = 'title-card-2';
  TextCard2:string = "Some quick example text to build on the card title and make up the bulk of the card's content"



  titleMenu3:string = 'Title-card-3';
  subTitleCard3:string = 'title-card-3';
  TextCard3:string = "Some quick example text to build on the card title and make up the bulk of the card's content"


  titleMenu4:string = 'Title-card-4';
  subTitleCard4:string = 'title-card-4';
  TextCard4:string = "Some quick example text to build on the card title and make up the bulk of the card's content"



}
