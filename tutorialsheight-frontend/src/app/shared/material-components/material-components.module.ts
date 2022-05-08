import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';

const matArr = [MatToolbarModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matArr
  ],
  exports: matArr
})
export class MaterialComponentsModule { }
