import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twdd-vs',
  templateUrl: './vs.component.html',
  styleUrls: ['./vs.component.scss']
})
export class VsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.wrap, footer').css('display', 'none').delay(100).fadeIn('slow');
  }

}
