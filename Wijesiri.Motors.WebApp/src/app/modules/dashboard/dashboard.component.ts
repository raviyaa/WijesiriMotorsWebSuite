import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from 'ng2-translate';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
}

  ngOnInit(): void {

  }


}
