import { UserDataService } from './../../../shared/services/user-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  // @Input() brand!: Brand;
  brand: any;
  addUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activeModal: NgbActiveModal,
    private dataService: UserDataService,
    private toastr: ToastrService
  ) {}

  get isFormGroupValid(): boolean {
    return this.addUserForm.valid;
  }

  get getBrandLogo(): string {
    return this.addUserForm.get('logo')?.value;
  }

  get modal(): NgbActiveModal {
    return this.activeModal;
  }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      name: [
        null,
        [
          Validators.minLength(2),
          Validators.maxLength(25),
          Validators.required,
        ],
      ],
      description: [
        null,
        [
          Validators.minLength(20),
          Validators.maxLength(150),
          Validators.required,
        ],
      ],
      logo: [null, [Validators.required]],
    });
    if (this.brand) {
      this.addUserForm.patchValue({
        name: this.brand.name,
        description: this.brand.description,
        logo: this.brand.logo,
      });
    }
  }

  onImageChange(event: any) {
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.addUserForm.patchValue({
        logo: event.target.result,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  onSave() {
    if (this.brand) {
      var paylaod = this.addUserForm.value;
      paylaod['brandId'] = this.brand._id;
    } else {
    }
  }
}
