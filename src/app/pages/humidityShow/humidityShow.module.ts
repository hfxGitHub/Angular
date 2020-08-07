import {NgModule} from '@angular/core';
import {NZ_I18N, NzButtonModule, NzCardModule, NzGridModule, NzTableModule, zh_CN} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {HumidityShowComponent} from './humidityShow.component';
import {HumidityShowService} from '../../../services/humidityShow';
import {HumidityShowRoutingModule} from './humidityShow-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    NzTableModule,
    NzButtonModule,
    HumidityShowRoutingModule,
    NzCardModule,
    NzGridModule
  ],
  declarations: [HumidityShowComponent],
  bootstrap: [HumidityShowComponent],
  providers: [{provide: NZ_I18N, useValue: zh_CN}, HumidityShowService],
})
export class HumidityShowModule {
}
