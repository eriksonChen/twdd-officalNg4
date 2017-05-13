import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'twdd-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./../index/index.component.scss']
})
export class DriveComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    $('.wrap, footer').css('display', 'none').delay(100).fadeIn('slow');
  }

  //司機招募
  goRecruit(){
    this.router.navigate(['/drive/recruit']);
  }  
  //報名說明會
  goOrientation(){
    this.router.navigate(['/drive/recruit/orientation']);
  }  
  //夥伴登入
  goLogin(){
    this.router.navigate(['/login']);
  }  

}
