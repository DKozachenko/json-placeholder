import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {UserInterface} from "../../interfaces/user.interface";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.sass']
})
export class PostPageComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    website: new FormControl('', Validators.required)
  })

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  public submit(): void {
    const value = this.form.value
    const newUser: UserInterface = {
      ...value,
      address: {
        street: 'street',
        suite: 'suite',
        city: 'city',
        zipcode: '45345',
        geo: {
          lat: '-463.4',
          lng: '342.0'
        }
      },
      company: {
        name: 'name',
        catchPhrase: 'catch',
        bs: 'bs'
      }
    }

    this.usersService.sendUser(newUser)
      .subscribe((user: UserInterface) => {
        this.form.reset()
      })
  }

}
