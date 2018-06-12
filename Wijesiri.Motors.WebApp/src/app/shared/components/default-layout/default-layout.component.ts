import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { AuthenticationService } from '../../../core/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = [];
  selectedModules: any = [];
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor(private authenticationService: AuthenticationService) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  ngOnInit() {
    this.selectedModules = this.authenticationService.getModules();
    if (!_.isEmpty(this.selectedModules)) {
      this.navItems = this.selectedModules;
    }
  }
}
