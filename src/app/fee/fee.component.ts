import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs';


@Component({
  selector: 'twdd-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.scss']
})
export class FeeComponent implements OnInit {
  fee = 0;
  form: FormGroup;

  constructor(private fb: FormBuilder, private dataSv: DataService) {
    this.form = fb.group({
      time: '07:00~21:59',
      start_add: ["", Validators.required],
      end_add: ["", Validators.required],
      token: dataSv.token
    })
  }

  get start_add(){
    return this.form.get('start_add');
  }
  get end_add(){
    return this.form.get('end_add');
  }

  ngOnInit() {
    $('.wrap, footer').css('display', 'none').delay(100).fadeIn('slow');
  }

  onSubmit() {
    console.log(this.form.value);

    this.dataSv.postFee(this.form.value).subscribe(res =>{
      if(+res.status == 0){
        alert(res.msg);
      }else{
        this.fee = res.fee;
        this.form.reset();
        this.form.get('time').setValue('07:00~21:59');
      }
    })

  }

}
