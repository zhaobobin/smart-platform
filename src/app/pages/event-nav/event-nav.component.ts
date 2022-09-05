import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'application-manage',
  templateUrl: './event-nav.component.html',
  styleUrls: ['../pages.component.less', './event-nav.component.less']
})
export class EventNavComponent {

  constructor(public router: Router) {}

  title = '我的导航';

  searchValue = null;

  currentUrl: string = this.router.routerState.snapshot.url;

  menus = [
    {
      key: 'menu1',
      name: '公共信息',
      icon: 'assets/images/navigation/menu11.png',
      active: 'assets/images/navigation/menu12.png',
      path: '/pages/event-nav/public-information'
    },
    {
      key: 'menu2',
      name: '人才服务',
      icon: 'assets/images/navigation/menu21.png',
      active: 'assets/images/navigation/menu22.png',
      path: '/pages/event-nav/talent-service'
    },
    {
      key: 'menu3',
      name: '社会保障',
      icon: 'assets/images/navigation/menu31.png',
      active: 'assets/images/navigation/menu32.png',
      path: '/pages/event-nav/social-security'
    },
    {
      key: 'menu4',
      name: '综合管理',
      icon: 'assets/images/navigation/menu41.png',
      active: 'assets/images/navigation/menu42.png',
      path: '/pages/event-nav/integrated-management'
    },
    {
      key: 'menu5',
      name: '劳动关系',
      icon: 'assets/images/navigation/menu51.png',
      active: 'assets/images/navigation/menu52.png',
      path: '/pages/event-nav/labor-relations'
    },
    {
      key: 'menu6',
      name: '系统支撑',
      icon: 'assets/images/navigation/menu61.png',
      active: 'assets/images/navigation/menu62.png',
      path: '/pages/event-nav/system-support'
    },
  ];

  search = () => {

  }

  handleClickMenu(currentUrl: string) {
    this.currentUrl = currentUrl;
  }

}
