import {Component, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipe";
import {EventEmitter} from "@angular/common/src/facade/async";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('dummy','dummy','https://udemy-images.udemy.com/course/750x422/500628_a962.jpg');

  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}
