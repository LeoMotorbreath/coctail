import { Component } from '@angular/core';
import { RequestService } from '../services/request.service';
import {tap,debounceTime,switchMap} from 'rxjs/operators'
import {of,fromEvent} from 'rxjs'
import { ViewChild} from '@angular/core';
import {OnInit} from '@angular/core'
import { Category } from 'src/models/category';
import { NgxSpinnerService } from 'ngx-spinner';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {
  
  @ViewChild('infiniteScroll') infiniteScroll:  IonInfiniteScroll;
  categories: any[]  = [];
  activeCategories: any[] = [];
  infiniteLoading; boolean = false;
  currentCategoryIndex: number = 0;  
  finalResult: boolean = false;
  constructor(
    private request: RequestService,
    private spinner: NgxSpinnerService,
    private router : Router
    ) {
    }

  ngOnInit(){
    this.categories = this.request.categories;
    this.spinner.show();
  }
  
  toggleActive(category: Category){
    category.toggleActive();
  }
  
  navigateToFilters() {
    this.router.navigate(['home','f'])
  }

  getCategory(event){
    if(this.currentCategoryIndex == this.activeCategories.length){
      this.finalResult = true;
      return 
    }
    this.request.getCoctaileByCategory(this.activeCategories[this.currentCategoryIndex].name).pipe(
      //used splice to debug
      tap((data)=>this.activeCategories[this.currentCategoryIndex].drinks = (data as any).drinks.splice(0,10)),
      tap(()=>this.currentCategoryIndex++),
      tap(()=>this.infiniteScroll.complete())
    ).subscribe();
  }
 
}
