import { Component, OnInit } from '@angular/core';
import {UserInterface} from "../../interfaces/user.interface";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-get-page',
  templateUrl: './get-page.component.html',
  styleUrls: ['./get-page.component.sass']
})
export class GetPageComponent implements OnInit {
  public numberUsers: number = 1
  public users: UserInterface[] = []

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  public getUsers(): void {
    this.usersService.getUsers().subscribe((users: UserInterface[]) => {
      this.users = users
    })
  }

}
