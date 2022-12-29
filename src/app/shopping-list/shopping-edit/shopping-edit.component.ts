import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  //Propiedades
  subcription:Subscription;
  editMode = false;
  editeItemIndex: number;
  editeItem: Ingredient;
  @ViewChild('f') slForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }
  
  ngOnInit(): void {
    this.subcription = this.shoppingListService.startedEditing.subscribe(
      (index:number) => {
        this.editeItemIndex = index;
        this.editMode = true;
        this.editeItem = this.shoppingListService.getIngredientByIndex(index);
        this.slForm.setValue({
          name: this.editeItem.name,
          amount: this.editeItem.amount
        });
    });
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
  
  onSubmit(form:NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editeItemIndex,newIngredient)
    }
    else{
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }


 onClear() {
  this.editMode = false;
  this.slForm.reset();
 }


 onDelete() {
  this.shoppingListService.deleteIngredient(this.editeItemIndex);
  this.onClear();
}

}
