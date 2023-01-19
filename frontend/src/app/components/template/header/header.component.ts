import { Component } from '@angular/core';

import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private headerService : HeaderService){}

  get title(){
    return this.headerService.headerData.title;
  }
  get icon(){
    return this.headerService.headerData.icon;
  }
  get routeUrl(){
    return this.headerService.headerData.routeUrl;
  }
}
