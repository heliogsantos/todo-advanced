import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CheckUrl } from './../check-url';
import { DataService } from './../../data-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}
  
  private route = new CheckUrl(this.router);
  user: string;

  url(): string {
    return this.route.router.url;
  }

  search(searchText: string): void {
    this.user = searchText;
    this.dataService.alterarMensagem(this.user);
  }

  ngOnInit() {}

}
