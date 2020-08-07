import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HumidityShowComponent} from './humidityShow.component';

const routes: Routes = [
  {path: '', component: HumidityShowComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumidityShowRoutingModule {
}
