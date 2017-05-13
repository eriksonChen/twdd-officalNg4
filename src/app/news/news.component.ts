import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'twdd-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {

  news:any[];
  events:any[];
  subs:Subscription;

  constructor(private dataSv:DataService) {
    this.subs = dataSv.getNews().subscribe(res =>{
      if(+res.status==1){
        this.news=res.news.map(n => {
          n.open = false;
          n.date = n.date.slice(0,10);
          return n;
        } );
      }else{
        alert(res.msg);
      }
      
    }, err => console.log('Error fetching data'));

    this.subs = dataSv.getEvent().subscribe(res =>{
      if(+res.status==1){
        this.events=res.event;
      }else{
        alert(res.msg);
      }
      
    }, err => console.log('Error fetching data'));
   }

  ngOnInit() {
    $('.wrap, footer').css('display', 'none').delay(100).fadeIn('slow');
  }

  isOpen(news){
    news.open=!news.open;
    console.log(news.open);
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
