import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './Components/login/login.component';
import { FoodBlogComponent } from './Components/food-blog/food-blog.component';
import { FoodrecipeComponent } from './Components/foodrecipe/foodrecipe.component';


const routes: Routes = [
 { path: '', redirectTo: 'foodblog', pathMatch: 'full' },
// { path: 'login', component: LoginComponent },
{ path: 'foodblog', component: FoodBlogComponent},
{ path: 'food-recipe', component:FoodrecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
