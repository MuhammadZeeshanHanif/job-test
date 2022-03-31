import { UserDataService } from "./../../../shared/services/user-data.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  addUserForm!: FormGroup;
  emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // email validation regex
  nameValidation = /^[a-zA-Z]+$/; // string  validation regex
  constructor(
    private formBuilder: FormBuilder,
    private activeModal: NgbActiveModal,
    private dataService: UserDataService,
    private toastr: ToastrService
  ) {}

  get isFormGroupValid(): boolean {
    return this.addUserForm.valid;
  }

  get getUserProfileImage(): string {
    return this.addUserForm.get("profile_image")?.value;
  }

  get modal(): NgbActiveModal {
    return this.activeModal;
  }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      first_name: [
        null,
        [
          Validators.minLength(2),
          Validators.maxLength(25),
          Validators.required,
          Validators.pattern(this.nameValidation),
        ],
      ],
      last_name: [
        null,
        [
          Validators.minLength(2),
          Validators.maxLength(25),
          Validators.required,
          Validators.pattern(this.nameValidation),
        ],
      ],
      profile_image: [null, [Validators.required]],
      email: [
        null,
        [Validators.required, Validators.pattern(this.emailValidation)],
      ],
      dob: [null, [Validators.required]],
    });
  }

  //on image select method
  onImageChange(event: any) {
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.addUserForm.patchValue({
        profile_image: event.target.result,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  //on save button click method
  onSave() {
    this.dataService.addNewUser(this.addUserForm.value);
    this.modal.close();
  }
}
