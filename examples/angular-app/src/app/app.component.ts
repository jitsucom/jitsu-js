import { Component, OnInit } from '@angular/core';
import { NgxJitsuService } from "@jitsu/angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  constructor(public jitsu: NgxJitsuService) {

  }

  onCLick(btnName) {
    this.jitsu.trackEvent('btn_clock', { btn: btnName })
  }

  ngOnInit() {
    this.jitsu.id({id: '0', email: 'user@jitsu.com'})
    this.jitsu.trackPageView()
  }
}
