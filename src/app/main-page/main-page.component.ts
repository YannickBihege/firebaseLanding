import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  myFunc() {
    var audio = new Audio('/assets/nightCruise.mp3');
    audio.play();
    }

    reloadCurrentPage() {
      window.location.reload();
     }

}
