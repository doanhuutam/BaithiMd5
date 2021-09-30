import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./product/book-list/book-list.component";
import {BookCreateComponent} from "./product/book-create/book-create.component";
import {BookEditComponent} from "./product/book-edit/book-edit.component";
import {BookDetailComponent} from "./product/book-detail/book-detail.component";

const routes: Routes = [
  {  path: 'book/list',
    component: BookListComponent},
  {
    path: 'book/create',
    component: BookCreateComponent
  },
  {
    path: 'book/edit/:id',
    component: BookEditComponent
  },
  {
    path: 'book/detail/:id',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
