import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  //Evento de cambio de matriz add or update or delete
  ingredientsChanged = new Subject<Array<Ingredient>>();
  //List
  private ingredients: Array<Ingredient> = [
    new Ingredient("Apple",5),
    new Ingredient("Orange",2.5),
  ];

  constructor() { }

  getIngredients(): Array<Ingredient> {
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.changedModelIngredient();
  }

  addIngredientList(ingredients:Array<Ingredient>){
    this.ingredients.push(...ingredients);
    this.changedModelIngredient();
  }

  private changedModelIngredient(): void {
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  
}
