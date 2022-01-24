import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.sass']
})
export class UserPreviewComponent implements OnInit {
  @Input() public user: UserInterface = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
