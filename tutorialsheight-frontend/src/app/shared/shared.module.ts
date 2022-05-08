import { MaterialComponentsModule } from './material-components/material-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const components = [
  HeaderComponent,
  FooterComponent,
  PageNotFoundComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialComponentsModule
  ],
  exports: components
})
export class SharedModule { }
