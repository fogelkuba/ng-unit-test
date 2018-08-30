import { Component } from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [UserService]
})
export class AppComponent {
  user: {name: string};
  title = 'test-project';
  constructor(private userService: UserService){}

  ngOnInit() {
    this.user = this.userService.user;
  }
}
