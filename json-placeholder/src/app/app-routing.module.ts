import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetPageComponent} from "./components/get-page/get-page.component";
import {PostPageComponent} from "./components/post-page/post-page.component";
import {UpdatePageComponent} from "./components/update-page/update-page.component";
import {UserPageComponent} from "./components/user-page/user-page.component";
import {DeletePageComponent} from "./components/delete-page/delete-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/get', pathMatch: 'full'},
  {path: 'get', component: GetPageComponent},
  {path: 'user/:id', component: UserPageComponent},
  {path: 'post', component: PostPageComponent},
  {path: 'update', component: UpdatePageComponent},
  {path: 'delete', component: DeletePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
