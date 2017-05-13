import { CustomValidators } from 'ng2-validation';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from './../data.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'twdd-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.scss']
})
export class OrientationComponent implements OnInit,OnDestroy {

  form: FormGroup;
  
  num='14';
  sub:Subscription;
  signSub:Subscription;
  items:any[] = [];
  wait = false;

  constructor(private fb:FormBuilder, private dataSv:DataService) { 
    this.form = fb.group({
      name:["", Validators.required],
      phone:["", Validators.required],
      email:["", [Validators.required , CustomValidators.email]],
      id:["", Validators.required],
      code:"",
      no:"",
      token:dataSv.token
    })


    this.sub = dataSv.getOrientation()
    .subscribe(res =>{
      if(res.status===1){
        this.items = res.orientation;
        if(this.items.length>0){
          this.num = this.items.filter(t => t.type!="red")[0].no;
          this.form.controls['no'].setValue(this.num);
        }
        
      }else{
        alert(res.msg);
      }
    },
      error => console.log('Error fetching data')
    );
  }

  get name(){
    return this.form.get('name');
  }
  get phone(){
    return this.form.get('phone');
  }
  get email(){
    return this.form.get('email');
  }
  get id(){
    return this.form.get('id');
  }

  ngOnInit() {
    
  }

  changeNo(no){
    this.form.controls['no'].setValue(no);
  }

  onSubmit(){
    // if(this.wait){
    //   return
    // }
    // this.wait=true;
    this.signSub = this.dataSv.postSign(this.form.value).subscribe(res =>{
      if(+res.status==1){
        this.form.reset();
      }
      alert(res.msg);
    },
    err =>{
      console.log(err);
      // this.wait = false;
    });
    
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
    // this.signSub.unsubscribe();
  }

}
