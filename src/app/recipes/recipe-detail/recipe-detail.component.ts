import { RecipesService } from './../recipes.service';
import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent implements OnInit {

 @Input() recipe:Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
    this.recipeService.addIngrToShopList(this.recipe.ingredients);
  }
}
