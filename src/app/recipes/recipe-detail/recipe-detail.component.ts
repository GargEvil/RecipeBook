import { RecipesService } from './../recipes.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent implements OnInit {

  isShown: boolean;
  recipe:Recipe;
  id:number;

  constructor(private recipeService: RecipesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.isShown = false;
    this.route.params
        .subscribe(
          (params : Params)=>{
            this.id = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.id);
          }
        )
  }

  onAddToShoppingList(){
    this.recipeService.addIngrToShopList(this.recipe.ingredients);
  }

  onEditRecipe(){
      this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

toggleShow() {
  this.isShown = ! this.isShown;
}
}
