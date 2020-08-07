import {RouterModule, Routes} from '@angular/router';
import {TemperatureAnalComponent} from './temperatureAnal.component';
import {NgModule} from '@angular/core';


const routers: Routes = [
  {path: '', component: TemperatureAnalComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class TemperatureAnalRoutingModule {

}
