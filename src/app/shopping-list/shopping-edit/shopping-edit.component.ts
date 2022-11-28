import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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
  //Event
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem(){
    this.ingredientAdded.emit(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
  }

}
