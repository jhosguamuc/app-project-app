import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  //Propiedades
  @ViewChild('nameInput') nameInput:ElementRef
  @ViewChild('amountInput') amountInput:ElementRef
  
  constructor(private shoppingListService: ShoppingListService) { }
  
  onAddItem(){
    this.shoppingListService.addIngredient(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
  }

}
