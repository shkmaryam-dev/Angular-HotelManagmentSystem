import { Racipe } from './../racipes.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-racipe-list',
  templateUrl: './racipe-list.component.html',
  styleUrls: ['./racipe-list.component.css'],
})
export class RacipeListComponent implements OnInit {
  @Output() racipeWasSelected = new EventEmitter<Racipe>();

  racipes: Racipe[] = [
    new Racipe(
      'A Test Recipe',
      'This is Simply a Test Recipe',
      // 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Racipe(
      'Another Test Recipe',
      'This is Simply a Test Recipe',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
      // 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRacipeSelected(racipe : Racipe){
    this.racipeWasSelected.emit(racipe);
  }
}
