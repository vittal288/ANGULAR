import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-user-poll',
  templateUrl: './user-poll.component.html',
  styleUrls: ['./user-poll.component.css'],
  // all CSS files will convert into JS, so no need to include CSS files in the hosting page of custom component 
  encapsulation: ViewEncapsulation.Native
})
export class UserPollComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    alert('Hi There, I am Angular Elements Custom Component !!!');
  }

}
