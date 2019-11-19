import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  
  
  constructor(public recipeService: RecipesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    
    this.recipeService.recipeListChanged.subscribe(
      (recipeList: Recipe[]) => {
        this.recipes = recipeList;
      }
    );
  }
  
  onRecipeSelected(recitem) {
    this.recipeService.recipeSelected.emit(recitem);
  }
  
  onAddRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route});
  }

}
