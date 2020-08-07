import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'temperatureShow',
        loadChildren: () => import('../temperatureShow/temperatureShow.module').then(m => m.TemperatureShowModule)
      },
      {
        path: 'humidityShow',
        loadChildren: () => import('../humidityShow/humidityShow.module').then(m => m.HumidityShowModule)
      },
      {
        path: 'temperatureAnal',
        loadChildren: () => import('../temperatureAnal/temperatureAnal.module').then(m => m.TemperatureAnalModule)
      },
      {
        path: 'humidityAnal',
        loadChildren: () => import('../humidityAnal/humidityAnal.module').then(m => m.HumidityAnalModule)
      },
      {
        path: 'equipment',
        loadChildren: () => import('../equipment/equipment.module').then(m => m.EquipmentModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
