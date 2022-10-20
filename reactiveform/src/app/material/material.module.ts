import { NgModule } from '@angular/core';
import { MatBadgeModule } from "@angular/material/badge"

const material=[
  MatBadgeModule
]

@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
