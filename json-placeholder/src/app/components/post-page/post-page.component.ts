import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

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

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    console.log(this.form)
  }

}
