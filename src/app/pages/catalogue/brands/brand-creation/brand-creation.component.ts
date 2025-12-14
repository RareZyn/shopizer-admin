import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'ngx-brand-creation',
  templateUrl: './brand-creation.component.html',
  styleUrls: ['./brand-creation.component.scss']
})
export class BrandCreationComponent implements OnInit {
  brand = {};

  constructor() {
  }

  ngOnInit() {
  }

}
