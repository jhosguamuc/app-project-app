import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  //Evento de cambio de matriz add or update or delete
  ingredientsChanged = new Subject<Array<Ingredient>>();
  startedEditing = new Subject<number>();

  //List
  private ingredients: Array<Ingredient> = [
    new Ingredient("Apple",5),
    new Ingredient("Orange",2.5),
  ];

  constructor() { }

  getIngredients(): Array<Ingredient> {
    return this.ingredients.slice();
  }

  getIngredientByIndex(index:number){
    return this.ingredients[index];
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

  updateIngredient(index:number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.changedModelIngredient();
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.changedModelIngredient();
  }
  
}
