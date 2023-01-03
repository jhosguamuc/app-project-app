import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  recipesChanged = new Subject<Array<Recipe>>();
  private recipes: Array<Recipe> = [];

  constructor(private shoppingListService: ShoppingListService) {}

setRecipe(recipes: Array<Recipe>){
  this.recipes = recipes;
  this.changedModelRecipe();
}

  getRecipes(): Array<Recipe> {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientList(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.changedModelRecipe();
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.changedModelRecipe();
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.changedModelRecipe();
  }

  private changedModelRecipe(): void {
    this.recipesChanged.next(this.recipes.slice());
  }
}
