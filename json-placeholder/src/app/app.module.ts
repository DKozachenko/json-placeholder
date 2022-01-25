import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetPageComponent } from './components/get-page/get-page.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { HeaderComponent } from './components/header/header.component';
import { UpdatePageComponent } from './components/update-page/update-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UserPreviewComponent } from './components/user-preview/user-preview.component';
import { UserPageComponent } from './components/user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GetPageComponent,
    PostPageComponent,
    HeaderComponent,
    UpdatePageComponent,
    UserPreviewComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
