import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Paprikaš',
     'Ukusno bosansko jelo napravljeno od domacih proizvoda',
      'https://www.recepti.com/img/recipe/41214-krompir-paprikas-sa-junetinom.jpg',
      [
        new Ingredient("Paprika", 7),
        new Ingredient("Mljeveno meso", 1)
      ]),
      new Recipe('Burger',
      'Hamburger napravljen po posebnom receptu',
       'https://www.recepti.com/img/recipe/41214-krompir-paprikas-sa-junetinom.jpg',[
        new Ingredient("Hljeb", 2),
        new Ingredient("Pljeskavica", 1)
      ])
   
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }
  addIngrToShopList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
  constructor(private slService:ShoppingListService) { }
}
