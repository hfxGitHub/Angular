import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// 路由文件，该文件控制全局一级路由，也就是页面跳转的控制
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {
    path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'layout', loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
