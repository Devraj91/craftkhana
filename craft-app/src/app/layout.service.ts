import { Injectable, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class LayoutService implements OnInit {
  chartServiceData: Array<object>;
  chart = [];
  tiles = [
    { text: 'Top', cols: 12, rows: 1, color: 'lightblue' },
    { text: 'Menu', cols: 1, rows: 8, color: 'lightgreen' },
    { text: 'Content', cols: 11, rows: 8, color: 'lightpink' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getMainLayout() {
    return this.tiles;
  }

}
