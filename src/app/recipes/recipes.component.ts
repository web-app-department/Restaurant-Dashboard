import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];


  constructor() { }

  ngOnInit() {
  }

}
