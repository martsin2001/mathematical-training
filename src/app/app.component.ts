import { Component, OnInit } from '@angular/core';
import { SelectedAction } from './core/models/app.interfaces';
import { AppService } from './core/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedAction: SelectedAction = SelectedAction.plus;

  constructor(private appService: AppService) {}

  ngOnInit() {}

  changeAction(action: SelectedAction) {
    this.selectedAction = action;
    this.appService.selectAction(action);
  }
}
