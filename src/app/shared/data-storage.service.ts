import { Recipe } from './../recipes/recipe.model';
import { RecipesService } from './../recipes/recipes.service';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class DataStorageService {

    baseUrl  = 'https://recipebook-29c3b-default-rtdb.firebaseio.com/';

    constructor(private http: HttpClient,
                private recipeService: RecipesService){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();

        this.http.put(this.baseUrl + 'recipes.json', recipes)
            .subscribe(response => {
                console.log(response);
                
            });
    }

    fetchRecipes(){
        return this.http.get(this.baseUrl + 'recipes.json')
        .pipe(map((recipes:Recipe[]) => {
            return recipes.map(recipe =>{
                return {...recipe, ingredients : recipe.ingredients ? recipe.ingredients : []};
            } )
            
        }),
        tap(recipes =>{
            this.recipeService.setRecipes(recipes);
        })
        )
          
        
    }
}