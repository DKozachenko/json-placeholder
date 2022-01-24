import { Component, OnInit } from '@angular/core';
import {UserInterface} from "../../interfaces/user.interface";
import {UsersService} from "../../services/users.service";
import {delay} from "rxjs";

@Component({
  selector: 'app-get-page',
  templateUrl: './get-page.component.html',
  styleUrls: ['./get-page.component.sass']
})
export class GetPageComponent implements OnInit {
  public numberUsers: number = 1
  public users: UserInterface[] = []
  public isLoading: boolean = false

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

  }

  public getUsers(): void {
    this.isLoading = true

    this.usersService.getUsers(this.numberUsers)
      .pipe(
        delay(2000)
      )
      .subscribe((users: UserInterface[]) => {
        this.users = users
        this.isLoading = false

      })

  }

}
