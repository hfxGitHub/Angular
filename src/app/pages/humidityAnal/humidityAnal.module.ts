import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HumidityAnalComponent} from './humidityAnal.component';
import {NZ_I18N, NzButtonModule, zh_CN} from 'ng-zorro-antd';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {HumidityAnalRoutingModule} from './humidityAnal-routing.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {HumidityAnalServices} from '../../../services/humidityAnal';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    HumidityAnalRoutingModule,
    NzButtonModule
  ],
  declarations: [HumidityAnalComponent],
  bootstrap: [HumidityAnalComponent],
  providers: [{provide: NZ_I18N, useValue: zh_CN}, HumidityAnalServices]
})
export class HumidityAnalModule {
}
