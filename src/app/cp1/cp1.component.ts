import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cp1',
  templateUrl: './cp1.component.html',
  styleUrls: ['./cp1.component.css']
})
export class Cp1Component implements OnInit {

  opVal:any = 0;
  mathNum:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getValues(ip:any){
    this.mathNum.push(ip);
    this.opVal = this.mathNum.join('');
  }

   doEval(){
    let result = eval(this.opVal);
    console.log(result)
    this.opVal = result;
  }

  reset(){
    this.opVal=0;
    this.mathNum =[];
  }
}
