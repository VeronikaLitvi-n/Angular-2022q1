import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})

export class AuthenticationComponent implements OnInit {

  login = './assets/login.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
