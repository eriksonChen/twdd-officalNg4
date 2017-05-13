import { Subscription } from 'rxjs/Subscription';
import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'twdd-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent implements OnInit {
  form: FormGroup;
  mydate;
  sub: Subscription;

  constructor(private fb: FormBuilder, private dataSv: DataService) {
    this.form = fb.group({
      name: ["", Validators.required],
      cell: ["", Validators.required],
      add: ["", Validators.required],
      date: ["", Validators.required],
      num: ["1", Validators.required],
      token: dataSv.token
    });
  }

  get name() { return this.form.get('name') }
  get cell() { return this.form.get('cell') }
  get add() { return this.form.get('add') }
  get date() { return this.form.get('date') }
  get num() { return this.form.get('num') }

  ngOnInit() {
    $('.wrap, footer').css('display', 'none').delay(100).fadeIn('slow');
  }

  onSubmit() {
    this.dataSv.postReserve(this.form.value).subscribe(res => {
      if (+res.status == 1) {
        this.form.reset();
      } 
      alert(res.msg);
    }, 
    err => {console.log(err)},
    ()=>{
    })
  }


}
