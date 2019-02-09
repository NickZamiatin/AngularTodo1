import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';
// import { url } from 'inspector';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'apliacation/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl : string = 'https://jsonplaceholder.typicode.com/todos'
  todoLimit = '?_limit=5'

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimit}`)
  }

  toggleCompleated( todo : Todo): Observable<any>{
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }

}
