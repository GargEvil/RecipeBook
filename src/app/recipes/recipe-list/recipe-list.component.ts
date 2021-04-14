import { Recipe } from './../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Paprikaš',
     'Ukusno bosansko jelo napravljeno od domacih proizvoda',
      'https://www.recepti.com/img/recipe/41214-krompir-paprikas-sa-junetinom.jpg'),
      new Recipe('Paprikaš 2',
      'Drugo ukusno bosansko jelo napravljeno od domacih proizvoda',
       'https://www.recepti.com/img/recipe/41214-krompir-paprikas-sa-junetinom.jpg')
   
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
