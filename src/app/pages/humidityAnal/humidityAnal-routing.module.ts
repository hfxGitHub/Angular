import {RouterModule, Routes} from '@angular/router';
import {HumidityAnalComponent} from './humidityAnal.component';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {path: '', component: HumidityAnalComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumidityAnalRoutingModule {

}
