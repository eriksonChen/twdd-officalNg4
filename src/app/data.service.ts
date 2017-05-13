import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private url:string = "./assets/api/";
  private api:string = "./assets/api/";
  private isPop = new Subject<boolean>();
  public appUrl = "https://goo.gl/kIoR15";
  public token:string;

  json:string;

  constructor(private http:Http) { 
    this.api = environment.production ? "https://www.twdd.com.tw/" : "./assets/api/";
    this.json = environment.production ? "" : ".json";
    if(environment.production){
      this.getToken().subscribe(res=>{
        this.token = res.vcode;
      })
    }else{
      this.token = 'test123456798';
    }

  }

  getPop():Observable<boolean>{
    return this.isPop.asObservable();
  }

  setPop(b){
    this.isPop.next(b);
  }

  getToken(){
    return this.http.get(`${this.api}vcode`).map(res => res.json());
  }

  getQa() {
		return this.http.get(`${this.url}qa.json`).map(res => res.json());
	}

  getNews() {
		return this.http.get(`${this.api}news${this.json}`).map(res => res.json());
	}
  getEvent() {
		return this.http.get(`${this.api}event${this.json}`).map(res => res.json());
	}

  getPartner() {
		return this.http.get(`${this.url}partner.json`).map(res => res.json());
	}

  getOrientation(){
    // return this.http.get(`${this.url}orientation${this.json}`)
    // .map( res => res.json().orientation );`
    return this.http.get(`${this.api}orientation${this.json}`).map(res => res.json());
  }

  loginPage(){
    return this.http.get(`${this.url}login.json`).map(res => res.json()).share();
  }

  getBanner(){
    return this.http.get(`${this.url}banner.json`).map(res => res.json()).share();
  }

  getLogin(p){
    let n = (p==="tiro") ? 0 : 1;
    return this.loginPage().map(res => res.data[n]);
  }

  postFee(data){
    return this.http.post(`${this.api}fee`, data).map(res=>res.json());
  }

  //
  postReserve(data){
    return this.http.post(`${this.api}reserve`, data).map(res=>res.json());
  }

  postSign(data){
    return this.http.post(`${this.api}sign`, data).map(res => res.json());
  }

}
