import { SERVICE_LANDING } from './../../core/config/app.constant';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeServiceNoAction } from 'src/app/core/states/actions/app.actions';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  serviceNo = SERVICE_LANDING;
  constructor(private store: Store<any>) { 
    this.store.dispatch(changeServiceNoAction({payload: this.serviceNo}));
  }

  ngOnInit(): void {
  }

}
