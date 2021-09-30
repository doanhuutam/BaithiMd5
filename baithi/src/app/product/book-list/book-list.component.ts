import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Book} from "../../model/book";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookFormGroup?: FormGroup
  books: Book[] = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getBooks();
    this.bookFormGroup=new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl()
    })
  }
  getBooks(){
    this.http.get<Book[]>('http://localhost:3000/books').subscribe((data)=>{
      this.books=data
    })
  }
  deleteBook(id:number){
    this.http.delete(`http://localhost:3000/books/${id}`).subscribe((data)=>{
      alert("xoá thành công")
      this.getBooks()
    })
  }

}
