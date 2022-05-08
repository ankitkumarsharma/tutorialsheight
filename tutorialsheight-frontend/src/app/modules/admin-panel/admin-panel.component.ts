import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SERVICE_ADMIN_PANEL } from 'src/app/core/config/app.constant';
import { changeServiceNoAction } from 'src/app/core/states/actions/app.actions';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  serviceNo = SERVICE_ADMIN_PANEL;
  constructor(private store: Store<any>) { 
    this.store.dispatch(changeServiceNoAction({payload: this.serviceNo}));
  }

  ngOnInit(): void {
  }

}
