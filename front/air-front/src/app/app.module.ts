import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlainMapComponent } from './plain-map/plain-map.component';
import { CountriesDropMenuComponent } from './countries-drop-menu/countries-drop-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from 'src/material-module';
import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from './countries-drop-menu/countries.service';
import { TopPolluatedComponent } from './top-polluated/top-polluated.component';


@NgModule({
  declarations: [
    AppComponent,
    PlainMapComponent,
    CountriesDropMenuComponent,
    TopPolluatedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
