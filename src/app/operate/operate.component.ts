import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'twdd-operate',
  templateUrl: './operate.component.html',
  // styleUrls: ['./operate.component.scss'],
  styleUrls: ['./../general/general.component.scss']
})
export class OperateComponent implements OnInit {
  qas:any[];
  subs:Subscription;

  constructor(private dataSv:DataService) {
    this.subs = this.dataSv.getQa().subscribe(qa =>{
      this.qas = qa.operate;
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
