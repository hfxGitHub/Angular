import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {zh_CN} from 'ng-zorro-antd/i18n';
import {CommonModule, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NzMenuModule, NzPaginationModule, NzTableModule} from 'ng-zorro-antd';
import {NzMessageService} from 'ng-zorro-antd';
import {NzCardModule} from 'ng-zorro-antd';
import {IconsProviderModule} from '../../icons-provider.module';
import {CommonServices} from '../../../services/common';

registerLocaleData(zh);

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    IconsProviderModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    NzLayoutModule,
    NzTableModule,
    ReactiveFormsModule,
    ScrollingModule,
    DragDropModule,
    NzPaginationModule,
    NzCardModule
  ],
  declarations: [
    LayoutComponent
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}, NzMessageService, CommonServices],
  bootstrap: [LayoutComponent]
})
export class LayoutModule {
}
