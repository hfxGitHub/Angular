import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TemperatureShowComponent} from './temperatureShow.component';

const routes: Routes = [
  {path: '', component: TemperatureShowComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemperatureShowRoutingModule {
}
