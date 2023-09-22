import { Racipe } from './racipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-racipes',
  templateUrl: './racipes.component.html',
  styleUrls: ['./racipes.component.css']
})
export class RacipesComponent implements OnInit {
  selectedracipe !:Racipe;
  constructor() { }

  ngOnInit(): void {
  }

}
