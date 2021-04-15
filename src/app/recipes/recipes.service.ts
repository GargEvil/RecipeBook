import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Paprikaš',
     'Ukusno bosansko jelo napravljeno od domacih proizvoda',
      'https://www.recepti.com/img/recipe/41214-krompir-paprikas-sa-junetinom.jpg'),
      new Recipe('Paprikaš 2',
      'Drugo ukusno bosansko jelo napravljeno od domacih proizvoda',
       'https://www.recepti.com/img/recipe/41214-krompir-paprikas-sa-junetinom.jpg')
   
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  constructor() { }
}
