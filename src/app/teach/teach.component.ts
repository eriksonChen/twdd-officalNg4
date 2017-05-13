import { Subscription } from 'rxjs/Subscription';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'twdd-teach',
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.scss']
})
export class TeachComponent implements OnInit, OnDestroy {
  type:number = 1;
  subs:Subscription;
  constructor(private dataSv:DataService) {
    this.subs = dataSv.getPop().subscribe(res =>{
      if(res){
        this.pop_open();
        console.log('open');
      }else{
        this.pop_close();
        console.log('close');
      }
    })
  }

  ngOnInit() {
    $('.teach li').eq(this.type-1).css('opacity', '1');
    var el = document.getElementById('pop-cont');
    var cont = new Hammer(el);
    cont.on('swipeleft', ()=>{
      //+
      if(this.type<3){
        this.page(this.type+1);
      }
      console.log('left');
    })
    cont.on('swiperight', ()=>{
      //-
      if(this.type>1){
        this.page(this.type-1);
      }
      console.log('right');
    })
  }



  closeBtn(){
    this.dataSv.setPop(false);
  }

  pop_close(){
    $('.popup').fadeOut(()=>{
      this.page(1);
    });
  }

  pop_open(){
    $('.popup').fadeIn();
  }

  page(n){
    var pos:number;
    if(this.type>n){
      pos = -100;
    }else{
      pos = 100;
    }
    TweenMax.to($('.teach li').eq(this.type-1), 0.7, {x:-pos, alpha:0, ease:Expo.easeInOut});
    TweenMax.set($('.teach li').eq(n-1),{x:pos});
    TweenMax.to($('.teach li').eq(n-1), 0.7, {x:0, alpha:1, ease:Expo.easeInOut});


    this.type=n;
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
  
}
