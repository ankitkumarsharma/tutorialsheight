import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SERVICE_PROFILE_ACCOUNT } from 'src/app/core/config/app.constant';
import { changeServiceNoAction } from 'src/app/core/states/actions/app.actions';

@Component({
  selector: 'app-profile-account',
  templateUrl: './profile-account.component.html',
  styleUrls: ['./profile-account.component.scss']
})
export class ProfileAccountComponent implements OnInit {

  serviceNo = SERVICE_PROFILE_ACCOUNT;
  constructor(private store: Store<any>) { 
    this.store.dispatch(changeServiceNoAction({payload: this.serviceNo}));
  }

  ngOnInit(): void {
  }

}
