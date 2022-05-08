import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SERVICE_LANDING } from 'src/app/core/config/app.constant';
import { changeServiceNoAction } from 'src/app/core/states/actions/app.actions';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  serviceNo = SERVICE_LANDING;
  constructor(private store: Store<any>) { 
    this.store.dispatch(changeServiceNoAction({payload: this.serviceNo}));
  }

  ngOnInit(): void {
  }

}
