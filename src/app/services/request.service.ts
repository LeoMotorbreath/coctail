import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Category } from 'src/models/category';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  categories: Category[] ;
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
  setActiveCategories(){
    this.acitveCategories = this.addActive();
  }
  addActive(){
    return this.categories.filter(category => category.active).map(category=>{category.drinks = []; return category}); 
  }
  constructor(
    private http: HttpClient 
    )
    {
      this.categories = this.createDefaultCategories();
      this.acitveCategories = [... this.categories];
    }
  getCoctaileByCategory(name:string){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + name);
  }
  
}
