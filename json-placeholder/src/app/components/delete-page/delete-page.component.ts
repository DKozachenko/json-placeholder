import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-delete-page',
  templateUrl: './delete-page.component.html',
  styleUrls: ['./delete-page.component.sass']
})
export class DeletePageComponent implements OnInit {
  @ViewChild('select') public select: ElementRef = new ElementRef<any>('select')

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  public deleteUser(): void {
    const id: number = +this.select.nativeElement.value

    this.usersService.deleteUser(id)
      .subscribe(() => {
        this.select.nativeElement.value = '1'
      })
  }

}
