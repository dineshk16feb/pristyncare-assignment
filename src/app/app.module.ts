import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ForecastComponent } from './forecast/forecast.component';
import { BannerComponent } from './forecast/banner/banner.component';
import { GridViewComponent } from './forecast/views/grid-view/grid-view.component';
import { ListViewComponent } from './forecast/views/list-view/list-view.component';
import { TabsModule } from './shared/tabs/tabs.module';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    BannerComponent,
    GridViewComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
