import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})

export class RecipeDetailComponent implements OnInit {
  selectedRecipeItem: Recipe;
  id: number;
  constructor(
    public recipeService: RecipesService, 
    private route: ActivatedRoute, 
    private router: Router) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.selectedRecipeItem = this.recipeService.getRecipe(this.id);
      }
    );
  }
  
  addToSl(ings: Ingredients[]) {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipeItem.ingredients);
  }
  
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  
  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
