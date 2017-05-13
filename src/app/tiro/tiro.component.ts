import { Subscription } from 'rxjs/Subscription';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'twdd-tiro',
  templateUrl: './tiro.component.html',
  styleUrls: ['./tiro.component.scss']
})
export class TiroComponent implements OnInit, OnDestroy {
  type={
    title:"",
    des:"",
    pic:'',
    btn:'',
    txt1:'',
    txt2:'',
    url:''
  };
  sub:Subscription;
  user={email:'', password:''};

  constructor(private fb:FormBuilder, private route:ActivatedRoute, private dataSv:DataService) { 
    this.sub = this.route.params.switchMap((params:Params) => this.dataSv.getLogin(params['id']))
    .subscribe(res => {
      this.type = res;
      this.onChangeType();
    });
  }

  ngOnInit() {
    $('.wrap, footer').css('display', 'none').delay(100).fadeIn('slow');
  }

  onChangeType(){
    this.user={email:'', password:''};
  }

  onSubmit(){
    // window.open(this.type.)
    $('form').submit();
    console.log(this.user.email, this.user.password);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
