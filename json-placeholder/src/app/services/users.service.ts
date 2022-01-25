import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "../interfaces/user.interface";
import {UpdateUserInterface} from "../interfaces/updateUser.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers(limit: number): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`)
  }

  public getUser(id: number) {
    return this.http.get<UserInterface>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  public sendUser(user: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(`https://jsonplaceholder.typicode.com/users/`, user)
  }

  public updateUser(id: number, user: UpdateUserInterface): Observable<UserInterface> {
    return this.http.patch<UserInterface>(`https://jsonplaceholder.typicode.com/users/${id}`, user)
  }
}
