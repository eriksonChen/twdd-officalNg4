import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'twdd-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit, OnDestroy {
  qas:any[];
  subs:Subscription;

  constructor(private dataSv:DataService) {
    this.subs = this.dataSv.getQa().subscribe(qa =>{
      this.qas = qa.general;
      // console.log(this.qas);
    },
    error => {
      console.log('Error fetching data');
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
