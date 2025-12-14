import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'ngx-category-creation',
  templateUrl: './category-creation.component.html',
  styleUrls: ['./category-creation.component.scss']
})
export class CategoryCreationComponent implements OnInit {
  category = {};

  constructor() {
  }

  ngOnInit() {
  }

}
