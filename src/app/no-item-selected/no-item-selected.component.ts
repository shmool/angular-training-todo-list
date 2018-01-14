import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-item-selected',
  template: `
    <h3>Please select an item to display</h3>
  `,
  styleUrls: ['./no-item-selected.component.scss']
})
export class NoItemSelectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
