import { StoreModule } from '@ngrx/store';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { LandingEffects } from './core/effects';
import { landingReducers, metaReducers } from './core/reducers';


@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    StoreModule.forFeature("landing",landingReducers,{metaReducers}),
    EffectsModule.forFeature(LandingEffects), 
  ]
})
export class LandingModule { }
