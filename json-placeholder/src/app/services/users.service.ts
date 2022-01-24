import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers(limit: number): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`)
  }
}