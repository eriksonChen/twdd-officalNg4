import { Subscription } from 'rxjs/Subscription';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'twdd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  isOpen:boolean = false;
  subs:Subscription;
  constructor(private dataSv:DataService) {
    
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
