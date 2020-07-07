import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { RequestService} from './services/request.service'
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import{ BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,   

    BrowserModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RequestService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
