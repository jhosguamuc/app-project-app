import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,tap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  apiUrl:string = "https://ng-course-angular-67e0a-default-rtdb.firebaseio.com/recipes.json";
  constructor(private http:HttpClient, private recipeService:RecipeService) { }

  storageRecipes(){
      const recipes = this.recipeService.getRecipes();
      this.http.put(this.apiUrl, recipes).subscribe(response => {
          console.log(response);
      });
  }

  fetchRecipes(){
    return this.http.get<Array<Recipe>>(this.apiUrl)
    .pipe(map(recipes => {
      return recipes.map(recipe => {
          
        return {
            ...recipe,
             ingredients: recipe.ingredients ? recipe.ingredients : []
            }
      })
    }),
    tap(recipe => this.recipeService.setRecipe(recipe)));
}

}
