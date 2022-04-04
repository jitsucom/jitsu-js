import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxJitsuModule } from '@jitsu/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxJitsuModule.forRoot({
      tracking_host: "http://localhost:8001/",
      key: "js.bqexj4t3vs7i4q7q1j3358.ixbyul0pyd5crmdftlif7"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
