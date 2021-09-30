import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../model/book";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookFormGroup: FormGroup = new FormGroup({})
  id?: number;

  constructor(private http: HttpClient, private activeRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.bookFormGroup = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl()
    })
    this.activeRoute.params.subscribe((data) => this.id = data.id)
    this.editBook(this.id)
  }

  editBook(id: any) {
    this.http.get<Book>(`http://localhost:3000/books/${id}`).subscribe((data) => {
      this.bookFormGroup.get('id')?.setValue(data.id);
      this.bookFormGroup.get('title')?.setValue(data.title);
      this.bookFormGroup.get('author')?.setValue(data.author);
      this.bookFormGroup.get('description')?.setValue(data.description);
    })
  }

  submit(){
    this.http.put<Book[]>(`http://localhost:3000/books/${this.id}`,this.bookFormGroup.value).subscribe((data)=>{
      alert("update thành công ")

    })
  }
}
