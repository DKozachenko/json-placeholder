import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {UserInterface} from "../../interfaces/user.interface";
import {UpdateUserInterface} from "../../interfaces/updateUser.interface";

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.sass']
})
export class UpdatePageComponent implements OnInit, AfterViewInit {

  public form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    website: new FormControl('', Validators.required)
  })

  @ViewChild('select') public select: ElementRef = new ElementRef<any>('select')

  public updateUser: UpdateUserInterface = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  }

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.changeUserData()
  }

  public changeUserData(): void {
    const id: number = +this.select.nativeElement.value

    this.usersService.getUser(id)
      .subscribe((user: UserInterface) => {
        this.updateUser.username = user.username
        this.updateUser.name = user.name
        this.updateUser.email = user.email
        this.updateUser.phone = user.phone
        this.updateUser.website = user.website
      })
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
