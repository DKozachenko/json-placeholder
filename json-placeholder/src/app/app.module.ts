import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetPageComponent } from './components/get-page/get-page.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { HeaderComponent } from './components/header/header.component';
import { UpdatePageComponent } from './components/update-page/update-page.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UserPreviewComponent } from './components/user-preview/user-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    GetPageComponent,
    PostPageComponent,
    HeaderComponent,
    UpdatePageComponent,
    UserPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
