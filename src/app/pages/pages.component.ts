import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.less'],
  templateUrl: './pages.component.html',
})
export class PagesComponent {

  constructor(public router: Router) {}

  searchValue?: string;

  currentMenuName: string = '工作台';

  currentUrl: string = this.router.routerState.snapshot.url;

  menus = [
    {
      name: '我的事项',
      icon: 'assets/images/common/menu01.png',
      path: '/pages/my-event',
    },
    {
      name: '事项导航',
      icon: 'assets/images/common/menu02.png',
      path: '/pages/event-nav',
    },
  ];

  copyRightText = 'Copyright©2021-2022 建设单位：相城区信息中心';

  search = () => {
    console.log(this.searchValue)
  }

  logout() {
    this.router.navigate(['/auth/login']);
  }

  handleClickMenu(currentUrl: string) {
    this.currentUrl = currentUrl;
  }

  ngOnInit() {
    
  }
}
