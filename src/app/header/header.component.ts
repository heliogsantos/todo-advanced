
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckUrl } from './check-url';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  private route = new CheckUrl(this.router);

  url() {
    return this.route.router.url;
  }

  ngOnInit() {
  }

}
