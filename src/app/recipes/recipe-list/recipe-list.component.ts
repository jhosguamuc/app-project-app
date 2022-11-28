import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  
  recipes : Array<Recipe> = [
    new Recipe("bistek encebollado","receta nicaraguense","https://fegasacruz.org/wp-content/uploads/2021/05/bistec-encebollado-2.jpg","4 Cucharadas Aceite de maíz\n1 Unidad Cebolla rebanada\n6 Rodajas Carne asada 750 gr\n2 Cucharadas Sazonador Líquido MAGGI®\n2 Cucharadas Salsa Tipo Inglesa CROSSE & BLACKWELL®\n1/2 Cubo *Consomé de pollo en polvo"),
    new Recipe("higado encebollado","receta nicaraguense","https://t2.rg.ltmcdn.com/es/posts/0/1/1/higado_encebollado_con_salsa_inglesa_53110_600_square.jpg"),
    new Recipe("indio viejo","receta nicaraguense","https://www.recetas-nicaragua.com/base/stock/Post/10-image/10-image_web.jpg"),
    new Recipe("pupusa","receta salvodoreña","https://media.gettyimages.com/photos/tasty-vegetarian-pupusas-recipe-served-with-curtido-closeup-on-a-picture-id1165567026"),
    new Recipe("tapado olanchano","receta hondureña","https://buenprovecho.hn/wp-content/uploads/2019/06/Tapado-olanchano.jpg")
  ];

  recipeSelected(recipe:Recipe){
      this.recipeWasSelected.emit(recipe)
  }
}
