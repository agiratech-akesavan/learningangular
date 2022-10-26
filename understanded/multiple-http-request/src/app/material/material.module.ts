import { NgModule } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from "@angular/material/table"

const material=[
  MatIconModule,
  MatButtonModule,
  MatTableModule,
]

@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
