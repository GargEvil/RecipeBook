import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[] = [
    new Recipe('Paprikaš',
     'Ukusno bosansko jelo napravljeno od domacih proizvoda',
      'https://www.recepti.com/img/recipe/41214-krompir-paprikas-sa-junetinom.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
