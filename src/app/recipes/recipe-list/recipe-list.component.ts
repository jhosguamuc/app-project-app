import { Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes : Array<Recipe>;
  subcription: Subscription

  constructor(private recipeService: RecipeService,
              private router:Router,
              private route:ActivatedRoute) {

   }
  
  ngOnInit() {
    this.subcription = this.recipeService.recipesChanged.subscribe(
      (recipes:Array<Recipe>) =>{
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

}
