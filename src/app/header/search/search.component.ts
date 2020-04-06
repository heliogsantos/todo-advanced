import { routes } from './../../app-routing.module';
import { CheckUrl } from './../../models/check-url';
import { DataService } from './../../data-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}

  public user = new User();
  
  private route = new CheckUrl(this.router);

  url(): string {
    return this.route.router.url;
  }
  


  search(searchText: string): void {
    this.user.Name = searchText;
    this.dataService.alterarMensagem(this.user);

  }
  

  ngOnInit() {
    
  }

}
