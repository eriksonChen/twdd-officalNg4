import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twdd-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss']
})
export class QaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.wrap, footer').css('display', 'none').delay(100).fadeIn('slow');
  }

}
