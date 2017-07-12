import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CheckListComponent } from './check-list/check-list.component';
import { CheckResultComponent } from './check-list/check-result/check-result.component';
import { CheckDataService } from './check-list/check-data.service';
import { CheckGraphComponent } from './check-list/check-result/check-graph/check-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent,
    CheckResultComponent,
    CheckGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CheckDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
