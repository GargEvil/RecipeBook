import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.less'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe : Recipe;
  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe:Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
