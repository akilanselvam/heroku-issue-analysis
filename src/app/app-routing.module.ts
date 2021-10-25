import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { CreateSubissuesComponent } from './subissues/create-subissues/create-subissues.component';
import { ListSubissuesComponent } from './subissues/list-subissues/list-subissues.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { SubpostsComponent } from './subposts/subposts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm',component:SubpostsComponent },
  { path: 'view-post/:id', component: ViewPostComponent },
  { path: 'user-profile/:name', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'list-subissuess', component: ListSubissuesComponent },
  { path: 'view-subissues/:id', component: SubpostsComponent },
  { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'create-subissues', component: CreateSubissuesComponent, canActivate: [AuthGuard] },
  { path: 'sign-up', component: SignupComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }