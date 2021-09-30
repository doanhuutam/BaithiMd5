import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookFormGroup:FormGroup=new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  })

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
submit(){
    this.http.post('http://localhost:3000/books',this.bookFormGroup.value).subscribe((data)=>{
      alert("tạo mới thành công ")
    })
}
}
