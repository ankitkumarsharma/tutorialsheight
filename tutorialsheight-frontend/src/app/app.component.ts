import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tutorialsheight';
  navigationFlag: boolean = true;
  serviceNo!: string;
  constructor(private store: Store<any>) {
    this.store.select('config').subscribe((data) => {
      this.serviceNo = data?.serviceNo;
      switch (this.serviceNo) {
        case '01':
          this.navigationFlag = true;
          break;
        case '02':
          this.navigationFlag = true;
          break;
        case '03':
          this.navigationFlag = false;
          break;
        case '04':
          this.navigationFlag = false;
          break;
      }
    });
  }
}
