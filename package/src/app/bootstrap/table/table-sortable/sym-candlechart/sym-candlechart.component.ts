import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sym-candlechart',
  templateUrl: './sym-candlechart.component.html',
  styleUrls: ['./sym-candlechart.component.css']
})
export class SymCandlechartComponent implements OnInit {
  @Input() listChartData = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.listChartData);
  }

}
