import { Injectable } from "@angular/core";
import { User } from "../models/user-model";

@Injectable({
  providedIn: "root",
})
export class UserDataService {
  userList: any = [];
  constructor() {}

  // Add new user
  addNewUser(new_user: User) {
    this.userList.push(new_user);
  }

  // get All User list
  getAllUsers() {
    return this.userList;
  }
}
