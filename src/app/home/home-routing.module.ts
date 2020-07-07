import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { FilterComponent } from '../filter/filter.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path:'f' ,
    component: FilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
