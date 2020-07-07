export class Drink{
    name: string;
    img:  string;
    constructor(model){
        this.name = model.strDrink;
        this.img  = model.strDrinkThumb; 
    }
}