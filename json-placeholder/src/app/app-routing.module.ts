import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetPageComponent} from "./components/get-page/get-page.component";
import {PostPageComponent} from "./components/post-page/post-page.component";
import {UpdatePageComponent} from "./components/update-page/update-page.component";
import {UserPageComponent} from "./components/user-page/user-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/get', pathMatch: 'full'},
  {path: 'get', component: GetPageComponent},
  {path: 'user/:id', component: UserPageComponent},
  {path: 'post', component: PostPageComponent},
  {path: 'update', component: UpdatePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
