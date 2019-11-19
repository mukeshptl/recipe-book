import { Injectable, EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  shoppingListChanged = new Subject<Ingredients[]>();
  ingredientToEdit = new Subject<number>();
  ingredients: Ingredients[] = [new Ingredients('Bread', 2),
    new Ingredients('Cheese', 5)];
    
    
  constructor() { }
  
  getIngredients() {
    return this.ingredients.slice();
  }
  
  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.shoppingListChanged.next(this.ingredients.slice());
  }
  
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  
  addIngredients(ingreds: Ingredients[]) {
    console.log(ingreds);
    this.ingredients.push(...ingreds);
    this.shoppingListChanged.next(this.ingredients.slice());
  }
  
  updateIngredients(index: number, ingred: Ingredients) {
    this.ingredients[index] = ingred;
    this.shoppingListChanged.next(this.ingredients.slice());
  }
  
  startedEditing(index: number) {
    this.ingredientToEdit.next(index);
  }
  
  deleteIngredient(index: number) {
    console.log(this.ingredients);
    this.ingredients.splice(index, 1);
    this.shoppingListChanged.next(this.ingredients.slice());
  }
  
}
