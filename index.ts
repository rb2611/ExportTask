//import {Component} from '@angular/core' ;

@Component ({
  selector:'app-root',
  templateUrl:'./index.html',
  styles:[`
  .backdrop{
    background-color:rgba(0,0,0,0.6);
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
  }`
  ]
})
export class index {
  display='none';
  constructor() {}
  onCloseHandled() {
    this.display='none';
  }
  openModal () {
    this.display="show";
  }
}
