import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent{
    collapsed = true;
    @Output() fetaureSelected = new EventEmitter<string>();

    onSelect(feature : string){
      this.fetaureSelected.emit(feature);
    }
}
