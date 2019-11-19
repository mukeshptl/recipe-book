import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipes.model';
import { RecipesService } from '../services/recipes.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipesService) {
    
  }
  
  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://recipe-book-fcb18.firebaseio.com/recipes.json', recipes)
    .subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
  
  fetchRecipes() {
    return this.http.get<Recipe[]>('https://recipe-book-fcb18.firebaseio.com/recipes.json')
    .pipe(
      map(
        (data) => {
          return data.map(
            (recs) => {
              return { ...recs, ingredients: recs.ingredients ? recs.ingredients : []}
            }
          );
        }
      ),
      tap(
        (recipes) => {
          this.recipeService.setRecipes(recipes);
        }
      )
    );
  }
  
}
