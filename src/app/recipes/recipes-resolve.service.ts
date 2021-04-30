import { RecipesService } from './recipes.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class RecipesResolverService implements Resolve<Recipe[]> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipeService.getRecipes();

        if (recipes.length === 0) {
            return this.dataStorage.fetchRecipes();
        }

        return recipes;
    }

    constructor(private dataStorage: DataStorageService,
        private recipeService: RecipesService) { }


}