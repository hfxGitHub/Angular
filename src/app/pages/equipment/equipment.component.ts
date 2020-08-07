import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {CommonServices} from '../../../services/common';
import {EquipmentService} from '../../../services/equipment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface RandomEquipment {
  id: number;
  name: string;
  detail: string;
  status: number;
  disabled: boolean;
}

@Component({
  selector: 'layout-equipment',
  templateUrl: './equipment.component.html',
  styles: []
})
export class EquipmentComponent implements OnInit {
  validateForm: FormGroup;
  checkedId = null;
  checkedName = null;
  checkedDetail = null;
  checkedStatus = null;
  checked = false;
  loading = true;
  indeterminate = false;
  hiddenMo = true;
  isEdit = true;
  listOfData: RandomEquipment[] = [];
  listOfCurrentPageData: RandomEquipment[] = [];
  setOfCheckedId = new Set<number>();

  constructor(
    private commonService: CommonServices,
    private equipmentService: EquipmentService,
    private message: NzMessageService,
    private fb: FormBuilder,
  ) {
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: RandomEquipment[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({disabled}) => !disabled);
    this.checked = listOfEnabledData.every(({id}) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({id}) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  onItemChecked(id: number): void {
    this.updateCheckedSet(id, this.checked);
    this.refreshCheckedStatus();
    this.checkedId = id;
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData.filter(({disabled}) => !disabled).forEach(({id}) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  addEquipment(): void {
    this.isEdit = false;
    this.checkedId = '该项无需填写';
    this.checkedName = '';
    this.checkedDetail = '';
    this.checkedStatus = '';
    this.hiddenMo = false;
  }

  editEquipment(): void {
    if (this.checkedId == null) {
      this.message.info('请选择需要编辑的数据');
      return;
    }
    this.isEdit = true;
    this.hiddenMo = false;
    const sendData = {
      id: this.checkedId
    };
    this.equipmentService.getEquipment(sendData).then(res => {
      if (res.data.code == 0) {
        this.checkedId = res.data.data[0].id;
        this.checkedName = res.data.data[0].name;
        this.checkedDetail = res.data.data[0].detail;
        this.checkedStatus = res.data.data[0].status;
      } else {
        this.message.warning(res.data.msg);
        this.hiddenMo = true;
      }
    }).catch(res => {
      this.message.error(res.data.msg);
    });
  }

  deleteEquipment(): void {
    if (this.checkedId === null) {
      this.message.info('请选择要删除的设备');
    }
    this.loading = true;
    const sendData = {
      equipmentId: this.checkedId,
    }
    this.equipmentService.delEquipment(sendData).then(res => {
      if (res.data.code === 0) {
        this.message.success('删除成功');
        this.getPageData();
      } else {
        this.message.warning(res.data.msg);
      }
    }).catch(res => {
      this.message.error(res.data.msg);
    });
  }

  onCancelSubmit(): void {
    this.hiddenMo = true;
    this.getPageData();
  }

  changeStatus(): void {
    if (this.checkedId === null) {
      this.message.info('请选择需要修改状态的设备');
      return;
    }
    this.loading = true;
    const sendData = {
      id: this.checkedId
    };
    this.equipmentService.changeStatus(sendData).then(res => {
      if (res.data.code === 0) {
        this.message.success('修改成功');
        this.getPageData();
      } else {
        this.message.warning(res.data.msg);
      }
    }).catch(res => {
      this.message.error(res.data.msg);
    });
  }


  listOfColumn = [
    {
      title: '名称',
    },
    {
      title: '描述',
    },
    {
      title: '状态',
    }
  ];

  getPageData(): void {
    this.loading = true;
    this.commonService.getEquipment().then(res => {
      if (res.data.code == 0) {
        this.message.success(res.data.msg);
        this.listOfData = res.data.data;
        this.loading = false;
      } else {
        this.message.warning(res.data.msg);
      }
    }).catch(res => {
      this.message.error(res.data.msg);
    });
  }

  submitEquipment(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm)
    if (this.validateForm.status !== 'VALID') {
      return;
    }
    if (this.isEdit) {
      const sendData = {
        id: this.checkedId,
        name: this.validateForm.value.equipmentName,
        detail: this.validateForm.value.equipmentDetail,
      };
      this.equipmentService.updateEquipment(sendData).then(res => {
        if (res.data.code === 0) {
          this.message.success(res.data.msg);
          this.hiddenMo = true;
          this.getPageData();
        } else {
          this.message.warning(res.data.msg);
        }
      }).catch(res => {
        this.message.error(res.data.msg);
      });
    } else {
      const sendData = {
        name: this.validateForm.value.equipmentName,
        detail: this.validateForm.value.equipmentDetail,
      };
      this.equipmentService.addEquipment(sendData).then(res => {
        if (res.data.code === 0) {
          this.message.success(res.data.data);
          this.hiddenMo = true;
          this.getPageData();
        } else {
          this.message.warning(res.data.msg);
        }
      }).catch(res => {
        this.message.error(res.data.msg);
      });
    }
  }

  ngOnInit(): void {
    this.getPageData();
    this.validateForm = this.fb.group({
      equipmentId: [null, [Validators.required]],
      equipmentName: [null, [Validators.required]],
      equipmentDetail: [null, [Validators.required]],
    });
  }
}
