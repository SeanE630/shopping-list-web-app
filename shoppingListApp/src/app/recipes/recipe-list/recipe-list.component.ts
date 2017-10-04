import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [

    //Testing Recipe Class Model
    new Recipe('A Test Recipe', 'This is simply a test', 'https://media4.popsugar-assets.com/files/thumbor/HeizdzjxRSohCn399BVjeNHYl1s/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/02/18/990/n/1922398/3119343a_chickensmall.jpg'), new Recipe('A Test Recipe', 'This is simply a test', 'https://media4.popsugar-assets.com/files/thumbor/HeizdzjxRSohCn399BVjeNHYl1s/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/02/18/990/n/1922398/3119343a_chickensmall.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
