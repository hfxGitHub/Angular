import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule, HttpParams} from '@angular/common/http';
import {NzFormModule, NzIconModule, NzSwitchModule, NzTableModule} from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';
import {EquipmentComponent} from './equipment.component';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {EquipmentRoutingModule} from './equipment-routing.module';
import {NzButtonModule} from 'ng-zorro-antd';
import {NzGridModule} from 'ng-zorro-antd';
import {EquipmentService} from '../../../services/equipment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    NzTableModule,
    NzButtonModule,
    EquipmentRoutingModule,
    NzGridModule,
    NzIconModule,
    NzSwitchModule,
    NzFormModule,
  ],
  declarations: [EquipmentComponent],
  bootstrap: [EquipmentComponent],
  providers: [{provide: NZ_I18N, useValue: zh_CN}, EquipmentService],
})
export class EquipmentModule {
}
