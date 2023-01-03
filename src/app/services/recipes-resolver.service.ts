import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { DataStorageService } from './data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})

export class RecipesResolverService implements Resolve<Array<Recipe>>{

  constructor(private dataStorageService:DataStorageService, private recipeService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();
    return recipes.length == 0 ?this.dataStorageService.fetchRecipes() : recipes;
  }
}
