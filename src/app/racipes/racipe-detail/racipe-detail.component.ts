import { Racipe } from './../racipes.model';
import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-racipe-detail',
  templateUrl: './racipe-detail.component.html',
  styleUrls: ['./racipe-detail.component.css']
})
export class RacipeDetailComponent implements OnInit {
  @Input() racipe !: Racipe;
  constructor() { }

  ngOnInit(): void {
  }

}
