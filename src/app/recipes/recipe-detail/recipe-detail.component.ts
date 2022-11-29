import { Component, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
@Input('Recipe') recipe:Recipe;

constructor(private recipeService: RecipeService) { }

onAddToShoppingList(){
this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
}

}
