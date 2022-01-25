import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UserInterface} from "../../interfaces/user.interface";
import {UsersService} from "../../services/users.service";
import {Location} from "@angular/common";
import {delay} from "rxjs";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.sass']
})
export class UserPageComponent implements OnInit {
  public user: UserInterface = {
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

  public isLoading: boolean = false

  constructor(private route: ActivatedRoute,
              private usersService: UsersService,
              private location: Location) { }

  ngOnInit(): void {
    this.isLoading = true

    this.route.params.subscribe((params: Params) => {
      const id: number = +params['id']

      this.usersService.getUser(id)
        .pipe(
          delay(1200)
        )
        .subscribe((user: UserInterface) => {
          this.user = user
          this.isLoading = false
        })

    })
  }

  public back(): void {
    this.location.back()
  }

}
