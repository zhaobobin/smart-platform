import { Component } from '@angular/core';

interface ICollect {
  key: string;
  icon: string;
  name: string;
  subtitle: string;
}

interface ITodo {
  key: number;
  title: string;
  date: string;
  tags: string[];
  isNew?: boolean;
}

@Component({
  selector: 'public-information',
  templateUrl: './public-information.html',
  styleUrls: ['./public-information.less']
})
export class PublicInformation {
  title = '公共信息';

  list1: ICollect[] = [
    {
      key: '1',
      name: '安家补贴待遇终止',
      icon: 'assets/images/event/icon_01.png',
      subtitle: 'AN JIA BU TIE'
    },
    {
      key: '2',
      name: '安家补贴发放确认',
      icon: 'assets/images/event/icon_02.png',
      subtitle: 'AN JIA BU TIE'
    },
    {
      key: '3',
      name: '安家补贴发放生成',
      icon: 'assets/images/event/icon_03.png',
      subtitle: 'AN JIA BU TIE'
    },
    {
      key: '4',
      name: '安家补贴核定',
      icon: 'assets/images/event/icon_04.png',
      subtitle: 'AN JIA BU TIE'
    },
    {
      key: '5',
      name: '安家补贴初审',
      icon: 'assets/images/event/icon_05.png',
      subtitle: 'AN JIA BU TIE'
    },
    {
      key: '6',
      name: '安家补贴复审',
      icon: 'assets/images/event/icon_06.png',
      subtitle: 'AN JIA BU TIE'
    },
    {
      key: '7',
      name: '安家撤销审核',
      icon: 'assets/images/event/icon_07.png',
      subtitle: 'AN JIA CHE XIAO'
    },
    {
      key: '8',
      name: '安家补贴明细查询',
      icon: 'assets/images/event/icon_08.png',
      subtitle: 'AN JIA BU TIE'
    },
    {
      key: '9',
      name: '安家申请信息查询',
      icon: 'assets/images/event/icon_09.png',
      subtitle: 'AN JIA SHEN QING'
    },
    {
      key: '10',
      name: '安家未生成查询',
      icon: 'assets/images/event/icon_10.png',
      subtitle: 'AN JIA WEI SHENG CHE'
    },
    {
      key: '11',
      name: '安家银行发放查询',
      icon: 'assets/images/event/icon_11.png',
      subtitle: 'AN JIA YIN HANG'
    },
    {
      key: '12',
      name: '安家住建核查查询',
      icon: 'assets/images/event/icon_12.png',
      subtitle: 'AN JIA ZHU JIAN'
    },
  ];

  list2: ICollect[] = [
    {
      key: '1',
      name: '带教补贴查询',
      icon: 'assets/images/event/icon_13.png',
      subtitle: 'AN JIA BU TIE'
    },
    {
      key: '2',
      name: '带教补贴名单导出',
      icon: 'assets/images/event/icon_14.png',
      subtitle: 'AN JIA BU TIE'
    },
    {
      key: '3',
      name: '带教补贴审核查询',
      icon: 'assets/images/event/icon_15.png',
      subtitle: 'AN JIA BU TIE'
    },
    {
      key: '4',
      name: '教师变更查询',
      icon: 'assets/images/event/icon_16.png',
      subtitle: 'AN JIA BU TIE'
    },
    {
      key: '5',
      name: '教师信息查询',
      icon: 'assets/images/event/icon_17.png',
      subtitle: 'AN JIA BU TIE'
    },
    {
      key: '6',
      name: '拟录用人员查询',
      icon: 'assets/images/event/icon_18.png',
      subtitle: 'AN JIA BU TIE'
    },
    {
      key: '7',
      name: '生活补贴查询',
      icon: 'assets/images/event/icon_19.png',
      subtitle: 'AN JIA CHE XIAO'
    },
    {
      key: '8',
      name: '生活补贴名单导出',
      icon: 'assets/images/event/icon_20.png',
      subtitle: 'AN JIA BU TIE'
    },
    {
      key: '9',
      name: '生活补贴审核查询',
      icon: 'assets/images/event/icon_21.png',
      subtitle: 'AN JIA SHEN QING'
    },
    {
      key: '10',
      name: '一次性奖励查询',
      icon: 'assets/images/event/icon_22.png',
      subtitle: 'AN JIA WEI SHENG CHE'
    },
    {
      key: '11',
      name: '一次性奖励审核查询',
      icon: 'assets/images/event/icon_23.png',
      subtitle: 'AN JIA YIN HANG'
    },
    {
      key: '12',
      name: '带教补贴发放确认',
      icon: 'assets/images/event/icon_24.png',
      subtitle: 'AN JIA ZHU JIAN'
    },
  ];

  todoList: ITodo[][] = [];

  initTodoList = () => {
    const arr = [];
    const data = {
      title: '您有5条报名信息待审核，请查看！',
      date: '2022-5-04',
      tags: ['这是一个标签', '这是一个标签']
    }
    for (let i = 1; i <= 10; i++) {
      const item = {
        key: i,
        isNew: i === 1,
        ...data
      }
      arr.push(item);
    }
    const newArr = [];
    for(var i=0;i<arr.length;i+=2){
      newArr.push(arr.slice(i,i+2));
    }
    this.todoList = newArr;
  }

  ngOnInit() {
    this.initTodoList();
  }

}
