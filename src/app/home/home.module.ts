import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import {RequestService} from '../services/request.service'
import {ReactiveFormsModule } from '@angular/forms'
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {NgxSpinnerModule} from "ngx-spinner";
import { BrowserModule } from '@angular/platform-browser';
import { FilterComponent } from '../filter/filter.component';

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
