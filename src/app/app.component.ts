import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger,state,style,animate,keyframes,transition} from '@angular/animations'

declare var $:any;
declare var Jquery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [
    trigger('box',[
        state('inactive',style({
            backgroundColor:'#ABEBC6',
            transform:'scale(2) translateX(40px)'
        })),
        state('active',style({
            backgroundColor:'#D68910',
            transform:'scale(3) translateX(40px)'
        })),
        transition('inactive => active',animate('500ms ease-in')),
        transition('active => inactive',animate('1000ms ease-out'))
    ])
]
})
export class AppComponent {
  title = 'example';

  public state:string="";
  constructor(){}
  toggleState()
  {
    this.state=this.state==='active' ? 'inactive' : 'active';
  }
}
