import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twdd-recruit',
  templateUrl: './recruit.component.html',
  styleUrls: ['./recruit.component.scss']
})
export class RecruitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.wrap, footer').css('display', 'none').delay(100).fadeIn('slow');
  }

}
