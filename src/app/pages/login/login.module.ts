import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import {CommonModule, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {NzButtonModule, NzFormModule, NzInputModule} from 'ng-zorro-antd';
import {LoginServices} from '../../../services/login';

registerLocaleData(zh);

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
  ],
  declarations: [
    LoginComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, LoginServices],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
