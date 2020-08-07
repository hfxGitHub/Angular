import {Component, OnInit} from '@angular/core';
import {CommonServices} from '../../../services/common';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;

  constructor(
    private commonServices: CommonServices,
    private messageServices: NzMessageService,
    private router: Router,
  ) {
  }

  logout(): void {
    this.commonServices.logout().then(res => {
      if (res.data.code === 0) {
        this.messageServices.success(res.data.msg);
        sessionStorage.removeItem('token');
        this.router.navigate(['login']);
      } else {
        this.messageServices.warning(res.data.msg);
      }
    }).catch(res => {
      this.messageServices.error(res.data.msg);
    });
  }

  ngOnInit() {

  }

}
