import { AddUserComponent } from "./../add-user/add-user.component";
import { UserDataService } from "./../../../shared/services/user-data.service";
import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.scss"],
})
export class HomeContainerComponent implements OnInit {
  brandsList: any = [];
  constructor(
    private dataService: UserDataService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onUserAdd() {
    const modelRef = this.modalService.open(AddUserComponent, {
      centered: true,
      size: "md",
      backdrop: "static",
    });
  }
}
