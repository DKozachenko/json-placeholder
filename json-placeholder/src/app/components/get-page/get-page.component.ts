import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-page',
  templateUrl: './get-page.component.html',
  styleUrls: ['./get-page.component.sass']
})
export class GetPageComponent implements OnInit {
  public numberUsers: number = 1

  constructor() { }

  ngOnInit(): void {
  }

}
