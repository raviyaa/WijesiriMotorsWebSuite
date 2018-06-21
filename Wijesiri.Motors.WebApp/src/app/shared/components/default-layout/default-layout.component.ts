import { SharedService } from './../../shared.service';
import { Component, Input, OnInit, Inject } from '@angular/core';
import * as _ from 'underscore';
import { AuthenticationService } from '../../../core/authentication.service';
import { IAppConfig } from '../../../app-config/app-config.interface';
import { APP_CONFIG } from '../../../app-config/app-config.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = [];
  lang: any;
  languages: any;
  selectedModules: any = [];
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor(private authenticationService: AuthenticationService,
    @Inject(APP_CONFIG) private config: IAppConfig,
    private sharedService: SharedService
  ) {

    this.languages = this.config.LANGUAGES;
    this.lang = this.sharedService.getSelectedLanguage();

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

  changeLanguage(): void {
    this.lang = (this.lang.id === this.config.LANGUAGE_DEFAULT.ID) ?
      { id: this.languages[1].ID, title: this.languages[1].NAME } :
      { id: this.languages[0].ID, title: this.languages[0].NAME };
    this.sharedService.setSelectedLanguage(this.lang);
  }
}
