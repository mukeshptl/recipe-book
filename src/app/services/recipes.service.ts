import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeListChanged = new Subject<Recipe[]>();
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [];
  // [
  //   new Recipe(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //     [
  //       new Ingredients('Meat', 1),
  //       new Ingredients('French Fries', 20)
  //     ]),
  //   new Recipe('Big Fat Burger',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //     [
  //       new Ingredients('Buns', 2),
  //       new Ingredients('Meat', 1)
  //     ])
  // ];
  
  selectedItem:Recipe;
  
  constructor(public slService: ShoppingListService) { }
  
  getRecipes() {
    return this.recipes.slice();
  }
  
  getRecipe(index: number) {
    return this.recipes[index];
  }
  
  addIngredientsToShoppingList(ingreds: Ingredients[]) {
    this.slService.addIngredients(ingreds);
  }
  
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeListChanged.next(this.recipes.slice());
  }
  
  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeListChanged.next(this.recipes.slice());
  }
  
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeListChanged.next(this.recipes.slice());
  }
  
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeListChanged.next(this.recipes.slice());
  }
}
