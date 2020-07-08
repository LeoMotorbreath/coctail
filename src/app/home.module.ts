import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import {ReactiveFormsModule } from '@angular/forms'
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {NgxSpinnerModule} from "ngx-spinner";
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { RequestService } from './services/request.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    
  ],
  declarations: [HomePage,FilterComponent],
  providers: [RequestService]
})
export class HomePageModule {}
