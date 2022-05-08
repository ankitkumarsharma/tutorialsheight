import { SERVICE_AUTH } from './../../core/config/app.constant';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as action from "./core/actions/auth.actions"; 
import { changeServiceNoAction } from 'src/app/core/states/actions/app.actions';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  serviceNo = SERVICE_AUTH;
  constructor(private store: Store<any>) { 
    this.store.dispatch(changeServiceNoAction({payload: this.serviceNo}));
  }

  ngOnInit(): void {
  }
}
