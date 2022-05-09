import { NAVBAR } from './core/app-header-main-navbar.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-main-navbar',
  templateUrl: './header-main-navbar.component.html',
  styleUrls: ['./header-main-navbar.component.scss']
})
export class HeaderMainNavbarComponent implements OnInit {
  readonly navbar  = NAVBAR;
  constructor() { }

  ngOnInit(): void {
  }

}
