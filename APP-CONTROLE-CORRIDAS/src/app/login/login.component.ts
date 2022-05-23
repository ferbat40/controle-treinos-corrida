import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  imgURL = 'https://lab.asics.com.br/static/7ca0093b65c722bc1b7cd5bb8f5fbfc2/06804/YtNe4sYUBHD9LTjzkAxF.webp';
  constructor() { }

  ngOnInit(): void {
  }

}
