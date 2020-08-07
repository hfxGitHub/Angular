import {Component, Input, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {HumidityShowService} from '../../../services/humidityShow';

interface RandomHumidity {
  id: number;
  createTime: string;
  temperature: number;
  equipment: number;
}

interface RandomEquipment {
  total: string;
  warnNum: string;
  scale: string;
  type: string;
}

@Component({
  selector: 'layout-humidityShow',
  templateUrl: './humidityShow.component.html',
  styles: [
    `
      p {
        margin: 0;
      }
    `
  ]
})
export class HumidityShowComponent implements OnInit {
  total = 1;
  loading = true;
  pageSize = 5;
  pageIndex = 1;
  Nomore = false;
  warnData = [];
  nowAll = 0;

  constructor(
    private humidityShowService: HumidityShowService,
    private message: NzMessageService
  ) {
  }

  refreshData(): void {
    this.total = 0;
    this.loading = true;
    this.pageSize = 5;
    this.pageIndex = 1;
    this.Nomore = false;
    this.warnData = [];
    this.listOfData = [];
  }

  listOfColumn = [
    {
      title: '时间'
    },
    {
      title: '湿度',
      compare: (a: RandomHumidity, b: RandomHumidity) => a.temperature - b.temperature,
    },
    {
      title: '设备',
    }
  ];

  listOfData: RandomHumidity[] = [];

  listOfWarnData: RandomEquipment[] = [];

  listPage(params): void {
    this.listOfData = [];
    const data = params;
    this.total = data.total;
    if (this.pageIndex == data.pages) {
      this.Nomore = true;
    } else {
      this.Nomore = false;
    }
    this.listOfData = data.records;
    this.loading = false;
  }

  lastPage(): void {
    this.loading = true;
    this.pageIndex = this.pageIndex - 1;
    this.getPageData();
  }

  nextPage(): void {
    this.loading = true;
    this.pageIndex = this.pageIndex + 1;
    this.getPageData();
  }

  getPageData(): void {
    this.loading = true;
    const sendData = {
      current: this.pageIndex,
      size: this.pageSize
    }
    this.humidityShowService.getPage(sendData).then(res => {
      if (res.data.code == 0) {
        this.message.create('success', res.data.msg);
        this.listPage(res.data.data);
      } else {
        this.message.create('warning', res.data.msg);
      }
    }).catch(res => {
      this.message.create('error', res.data.msg);
      console.log(res.data);
    })
    this.humidityShowService.getWarnData().then(res => {
      if (res.data.code == 0) {
        this.listOfWarnData = res.data.data;
        console.log(this.listOfWarnData)
      } else {
        this.message.create('warning', res.data.msg);
      }
    }).catch(res => {
      this.message.create('error', res.data.msg);
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.refreshData()
    this.getPageData();
  }
}
