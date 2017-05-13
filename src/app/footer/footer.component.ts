import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twdd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  appUrl:string;
  constructor(private dataSv:DataService) { 
    this.appUrl = dataSv.appUrl;
  }

  ngOnInit() {
  }

  downloadApp(){
    window.open(this.appUrl);
  }

}
