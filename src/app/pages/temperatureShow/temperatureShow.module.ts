import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule, HttpParams} from '@angular/common/http';
import {NzIconModule, NzTableModule} from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';
import {TemperatureShowComponent} from './temperatureShow.component';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {TemperatureShowRoutingModule} from './temperatureShow-routing.module';
import {NzButtonModule} from 'ng-zorro-antd';
import {TemperatureShowService} from '../../../services/temperatureShow';
import {NzCardModule} from 'ng-zorro-antd';
import {NzGridModule} from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    NzTableModule,
    NzButtonModule,
    TemperatureShowRoutingModule,
    NzCardModule,
    NzGridModule,
    NzIconModule
  ],
  declarations: [TemperatureShowComponent],
  bootstrap: [TemperatureShowComponent],
  providers: [{provide: NZ_I18N, useValue: zh_CN}, TemperatureShowService],
})
export class TemperatureShowModule {
}
