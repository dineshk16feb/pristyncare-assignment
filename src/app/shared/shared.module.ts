import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from './search/search.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    SearchComponent,
    SidenavComponent,
    CardComponent,
    ListComponent    
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    SearchComponent,
    SidenavComponent,
    CardComponent,
    ListComponent
  ]
})
export class SharedModule { }
