import { RecipesService } from './recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.less'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
