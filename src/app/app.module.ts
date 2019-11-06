import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { CalculationContainerComponent } from './calculation-container/calculation-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatSliderModule,
  MatDialogModule
} from '@angular/material';
import { CalculationPanelComponent } from './calculation-container/calculation-panel/calculation-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './redux/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SubHistoryComponent } from './right-panel/sub-history/sub-history.component';
import { HistoryDialigComponent } from './shared/history-dialig/history-dialig.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    RightPanelComponent,
    CalculationContainerComponent,
    CalculationPanelComponent,
    SubHistoryComponent,
    HistoryDialigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('app-state', AppReducer),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  entryComponents: [HistoryDialigComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
