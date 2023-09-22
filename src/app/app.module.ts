import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RacipesComponent } from './racipes/racipes.component';
import { RacipeListComponent } from './racipes/racipe-list/racipe-list.component';
import { RacipeDetailComponent } from './racipes/racipe-detail/racipe-detail.component';
import { RacipeItemComponent } from './racipes/racipe-list/racipe-item/racipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    RacipesComponent, 
    RacipeListComponent, 
    RacipeDetailComponent, 
    RacipeItemComponent, 
    ShoppingListComponent, 
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
