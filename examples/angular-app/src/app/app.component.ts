import { Component, OnInit } from '@angular/core';
import { NgxJitsuService } from "@jitsu/angular";
import { User, UserService } from "./user.service";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  constructor(private jitsu: NgxJitsuService, private userService: UserService, router: Router) {
    // subscribe on router navigation end event and track page view
    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.jitsu.trackPageView()
      });
  }

  onCLick(btnName) {
    // send btn_click_event with button name payload on button click
    this.jitsu.track('btn_click', { btn: btnName })
  }

  ngOnInit() {
    // identify current user for all track events
    this.userService.currentUser.subscribe((user: User) => {
      this.jitsu.id({id: user.ID, email: user.EMAIl})
    })
  }
}
