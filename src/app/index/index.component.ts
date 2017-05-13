import { Subscription } from 'rxjs/Subscription';
import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'twdd-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  appUrl:string;
  sub:Subscription;
  banner:any[];
  constructor(private router:Router, private dataSv:DataService) { 
    this.appUrl = dataSv.appUrl;
  }

  ngOnInit() {
    $('.wrap, footer').css('display', 'none').delay(100).fadeIn('slow');
    this.sub = this.dataSv.getBanner().subscribe(res => {
      this.banner = res;
    })
  }

  openTeach(){
    this.dataSv.setPop(true);
  }

  goService(){
    this.router.navigate(['/user/service']);
  }
  goVs(){
    this.router.navigate(['/user/vs']);
  }
  goFee(){
    this.router.navigate(['/user/fee']);
  }
  qaBtn(){
    this.router.navigateByUrl('/user/qa');
  }
  newsBtn(){
    this.router.navigateByUrl('user/news');
  }

  //app下載
  downloadApp(){
    window.open(this.appUrl);
  }


}
