import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemperatureAnalComponent} from './temperatureAnal.component';
import {NZ_I18N, NzButtonModule, zh_CN} from 'ng-zorro-antd';
import {TemperatureAnalRoutingModule} from './temperatureAnal-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxEchartsModule} from 'ngx-echarts';
import {TemperatureAnalServices} from '../../../services/temperatureAnal';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    NzButtonModule,
    TemperatureAnalRoutingModule,
  ],
  declarations: [TemperatureAnalComponent],
  bootstrap: [TemperatureAnalComponent],
  providers: [{provide: NZ_I18N, useValue: zh_CN}, TemperatureAnalServices]
})
export class TemperatureAnalModule {
}
