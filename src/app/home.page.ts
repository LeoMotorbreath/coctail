import { Component } from '@angular/core';
import {tap,} from 'rxjs/operators'
import { ViewChild} from '@angular/core';
import { Category } from 'src/models/category';

import { IonInfiniteScroll } from '@ionic/angular';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {
  
  @ViewChild('infiniteScroll') infiniteScroll:  IonInfiniteScroll;
  
  activeCategories: Category[] = this.request.acitveCategories;
  currentCategoryIndex: number = 0;  
  finalResult: boolean = false;
  loadingDisabled: boolean = false;
  renderFilters: boolean = false;

  constructor (
    private request: RequestService,
    ) {
    }

  ngOnInit(){
    this.getCategory()
  }
  private clear(){
    this.currentCategoryIndex = 0;
    this.finalResult = false;
    this.loadingDisabled = false;
  }
  setActiveCategories(categories){
    this.clear();
    this.activeCategories = categories;
    this.getCategory()
  }
  toggleFiltersRendering() {
    this.renderFilters = !this.renderFilters;
  }
  
  getCategory(){
    if(this.currentCategoryIndex == this.activeCategories.length){
      this.finalResult = true;
      return 
    }
    if(this.activeCategories[this.currentCategoryIndex].drinks.length){
      this.currentCategoryIndex++;
      return
    }
    this.loadingDisabled = true;
    this.request.getCoctaileByCategory(this.activeCategories[this.currentCategoryIndex].name).pipe(
      //used  splice to rappid debug
      tap((data)=>console.log(data)),
      tap((data)=>this.activeCategories[this.currentCategoryIndex].drinks = (data as any).drinks.splice(0,10)),
      tap(()=>this.currentCategoryIndex++),
      tap(()=>this.infiniteScroll.complete()),
      
    ).subscribe(()=>this.loadingDisabled = false);
  }
 
}
