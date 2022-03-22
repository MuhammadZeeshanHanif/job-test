import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { User } from "src/app/shared/models/user-model";
import { UserDataService } from "src/app/shared/services/user-data.service";
import { AddUserComponent } from "../add-user/add-user.component";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.scss"],
})
export class ListUserComponent implements OnInit {
  usersList: User[] = [];
  constructor(
    private dataService: UserDataService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  // get All Users
  getAllUsers() {
    this.usersList = this.dataService.getAllUsers();
  }
}
