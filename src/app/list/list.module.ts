import { HomeModule } from "./../home/home.module";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListRoutingModule } from "./list-routing.module";
import { UsersComponent } from "./components/users/users.component";

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, ListRoutingModule, HomeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListModule {}
