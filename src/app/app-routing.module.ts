import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'post-detail/:id',
    loadChildren: () => import("./post-detail/post-detail.module").then(m => m.PostDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
