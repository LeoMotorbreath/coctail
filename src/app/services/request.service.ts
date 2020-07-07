import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Category } from 'src/models/category';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  categories: Category[] =  [
    new Category('Ordinary Drink'),
    new Category('Other/Unknown'),
    new Category('Cocktail'),
    new Category('Milk / Float / Shake'),
    new Category('Cocoa'),
    new Category('Shot'),
    new Category('Coffee / Tea'),
    new Category('Homemade Liqueur'),
    new Category('Beer'),
  ];
  acitveCategories: Category[];
  createDefaultCategories(): Category[] {
    return [
      new Category('Ordinary Drink'),
      new Category('Other/Unknown'),
      new Category('Cocktail'),
      new Category('Milk / Float / Shake'),
      new Category('Cocoa'),
      new Category('Shot'),
      new Category('Coffee / Tea'),
      new Category('Homemade Liqueur'),
      new Category('Beer'),
    ]
  }
  
  addActive(){
    this.categories.forEach(category=> category.active? this.acitveCategories.push(category) : null);
  }
  constructor(
    private http: HttpClient 
    )
    {
      this.acitveCategories = [... this.categories];
    }
  getCoctaileByName(name:string){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name )
  }
  getCoctaileByCategory(name:string){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + name);
  }
  
}
