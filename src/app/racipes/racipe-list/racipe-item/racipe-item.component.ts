import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Racipe } from '../../racipes.model';

@Component({
  selector: 'app-racipe-item',
  templateUrl: './racipe-item.component.html',
  styleUrls: ['./racipe-item.component.css']
})
export class RacipeItemComponent implements OnInit {
  @Input() racipe !: Racipe;
  @Output() racipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.racipeSelected.emit();
  }

}
