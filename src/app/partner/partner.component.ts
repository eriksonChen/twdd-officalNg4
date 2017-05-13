import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'twdd-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit, OnDestroy {
  stores: any[];
  partners: any[]=[];
  subs: Subscription;

  constructor(private dataSv: DataService) {
    this.subs = dataSv.getPartner().subscribe(res => {
      this.stores = res.store;
      this.partners = res.partner;
    })
  }

  ngOnInit() {
    $('.wrap, footer').css('display', 'none').delay(100).fadeIn('slow');
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
