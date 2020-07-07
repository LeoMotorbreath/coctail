import { Drink } from './drink';

export class Category {
    name:   string;
    active: boolean;
    drinks: Drink[];
    toggleActive(){
        this.active = !this.active ;
    }
    constructor(name:string) {
        this.name = name;
        this.active = true; 
        this.drinks = [];
    }
}