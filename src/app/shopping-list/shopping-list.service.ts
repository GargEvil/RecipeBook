import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Oranges',10)
];
  constructor() { }

  getIngredients()
  {
    return this.ingredients.slice();
  }

  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
