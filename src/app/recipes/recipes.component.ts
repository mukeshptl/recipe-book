import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass'],
})
export class RecipesComponent implements OnInit {
  selectedRecipeItem:Recipe;
  
  constructor(public recipeService: RecipesService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe) => {
        this.selectedRecipeItem = recipe;
      }
    );
  }
  
  

}
