import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {    MatToolbarModule } from '@angular/material/toolbar';
import {    MatButtonModule } from '@angular/material/button';
import {    MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import { MatPaginatorModule} from '@angular/material/paginator'
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatTableModule} from '@angular/material/table'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {     MatSelectModule} from '@angular/material/select';
import {     MatAutocompleteModule} from '@angular/material/autocomplete';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
