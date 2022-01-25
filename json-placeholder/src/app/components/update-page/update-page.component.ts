import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {UserInterface} from "../../interfaces/user.interface";
import {UpdateUserInterface} from "../../interfaces/updateUser.interface";

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.sass']
})
export class UpdatePageComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    website: new FormControl('')
  })

  @ViewChild('select') public select = new ElementRef<any>('select')

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  public submit(): void {
    const value = this.form.value
    const idUser = +this.select.nativeElement.value

    const updatedUser: UpdateUserInterface = {}

    if (this.form.get('username')?.value) {
      updatedUser.username = this.form.get('username')?.value
    }

    if (this.form.get('name')?.value) {
      updatedUser.name = this.form.get('name')?.value
    }

    if (this.form.get('email')?.value) {
      updatedUser.email = this.form.get('email')?.value
    }

    if (this.form.get('phone')?.value) {
      updatedUser.phone = this.form.get('phone')?.value
    }

    if (this.form.get('website')?.value) {
      updatedUser.website = this.form.get('website')?.value
    }

    this.usersService.updateUser(idUser, updatedUser).subscribe((user: UserInterface) => {
      this.form.reset()
    })

  }

}
