import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart-failure-prediction',
  templateUrl: './heart-failure-prediction.component.html',
  styleUrls: ['./heart-failure-prediction.component.scss']
})
export class HeartFailurePredictionComponent implements OnInit {


riskTesting(){
    alert("בבדיקה...")
  }


  constructor() { }

  ngOnInit(): void {
  }

}
