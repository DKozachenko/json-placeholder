import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetPageComponent } from './components/get-page/get-page.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { HeaderComponent } from './components/header/header.component';
import { UpdatePageComponent } from './components/update-page/update-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GetPageComponent,
    PostPageComponent,
    HeaderComponent,
    UpdatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
