import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'ngx-inventory-creation',
  templateUrl: './inventory-creation.component.html',
  styleUrls: ['./inventory-creation.component.scss']
})
export class InventoryCreationComponent implements OnInit {
  inventory = {};

  constructor() {
  }

  ngOnInit() {
  }

}
