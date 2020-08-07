import {Component, OnInit} from '@angular/core';
import {HumidityAnalServices} from '../../../services/humidityAnal';
import {NzMessageService} from 'ng-zorro-antd';
import {CommonServices} from '../../../services/common';

@Component({
  selector: 'layout-humidityAnal',
  templateUrl: './humidityAnal.component.html',
  styleUrls: []
})


export class HumidityAnalComponent implements OnInit {

  chartOption1: any;
  equipment = 1;
  EquipmentData = [];
  total = 0;

  constructor(
    private Analyservices: HumidityAnalServices,
    private commonServices: CommonServices,
    private messageServices: NzMessageService
  ) {
  }

  changeEquipment(ele): void {
    this.equipment = ele.target.id;
    this.getData();
  }

  getEquipmentList(): void {
    this.commonServices.getEquipment().then(res => {
      if (res.data.code == 0) {
        this.EquipmentData = res.data.data;
        this.equipment = this.EquipmentData[0].id;
        this.getData();
      } else {
        this.messageServices.warning(res.data.msg);
      }
    }).catch(res => {
      this.messageServices.error(res.data.msg);
    })
  }

  getData(): void {
    const params = {
      equipment: this.equipment,
    };
    this.Analyservices.getPage(params).then(res => {
      if (res.data.code == 0) {
        this.total = res.data.data.total;
        if (this.total === 0) {
          this.messageServices.info('该设备暂无数据');
          return;
        }
        const sendData = {
          size: this.total,
          equipment: this.equipment,
        };
        this.Analyservices.getPage(sendData).then(res1 => {
          if (res1.data.code == 0) {
            this.drawData(res1.data.data.records);
          } else {
            this.messageServices.warning(res1.data.msg);
          }
        }).catch(res1 => {
          this.messageServices.error(res1.data.msg);
        });
      } else {
        this.messageServices.warning(res.data.msg);
      }
    }).catch(res => {
      this.messageServices.error(res.data.msg);
      console.log(res);
    });
  }

  drawData(data): void {
    let xData = [];
    let yData = [];
    data.forEach((item, index) => {
      xData.push(item.createTime);
      yData.push((item.humidity.toString()));
    });
    this.chartOption1 = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {},
      xAxis:
        {
          type: 'category',
          boundaryGap: false,
          data: xData
        },
      yAxis: {},
      series: [{
        name: data[0].equipment.name,
        type: 'line',
        data: yData
      }]
    };
  }

  ngOnInit() {
    this.getEquipmentList();
  }
}
