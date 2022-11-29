import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes : Array<Recipe> = [
    new Recipe("bistek encebollado","receta nicaraguense","https://fegasacruz.org/wp-content/uploads/2021/05/bistec-encebollado-2.jpg",
    [
      new Ingredient('tomato',2),
      new Ingredient('onion',3),
      new Ingredient('opio',3),
    ]),
    new Recipe("higado encebollado","receta nicaraguense","https://t2.rg.ltmcdn.com/es/posts/0/1/1/higado_encebollado_con_salsa_inglesa_53110_600_square.jpg",
    [
      new Ingredient('tomato',2),
      new Ingredient('onion',3),
      new Ingredient('opio',3),
    ]),
    new Recipe("indio viejo","receta nicaraguense","https://www.recetas-nicaragua.com/base/stock/Post/10-image/10-image_web.jpg",
    [
      new Ingredient('tomato',2),
      new Ingredient('onion',3),
      new Ingredient('opio',3),
    ]),
    new Recipe("pupusa","receta salvodoreña","https://media.gettyimages.com/photos/tasty-vegetarian-pupusas-recipe-served-with-curtido-closeup-on-a-picture-id1165567026",
    [
      new Ingredient('tomato',2),
      new Ingredient('culantro',3),
      new Ingredient('omasapio',6),
    ]),
    new Recipe("tapado olanchano","receta hondureña","https://buenprovecho.hn/wp-content/uploads/2019/06/Tapado-olanchano.jpg",
    [
      new Ingredient('atol',2),
      new Ingredient('zanahora',3),
      new Ingredient('opio',3),
    ])
  ];

  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

getRecipes() : Array<Recipe> {
  return this.recipes.slice();
}

addIngredientToShoppingList(ingredients: Ingredient[]) {
  this.shoppingListService.addIngredientList(ingredients);
}

}
