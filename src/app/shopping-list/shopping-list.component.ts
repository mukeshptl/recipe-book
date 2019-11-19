import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass'],
})

export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredients[];
  
  constructor(private slService: ShoppingListService) {  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.shoppingListChanged.subscribe(
      (ingreds: Ingredients[]) => {
        this.ingredients = ingreds;
      }
    );
  }
  
  editIngredient(index: number) {
    this.slService.startedEditing(index);
  }
}
