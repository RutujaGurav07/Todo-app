import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray = [];
  todos;


  addTodo(value) {
    this.todoArray.push(value);
    console.log(this.todos);
  }

  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1)
      }
    }
    console.log("delete item");
  }

  todoSubmit(value: any) {
    // console.log(value);
    if (value !== "") {
      this.todoArray.push(value.todo)
    }else{
      alert("Field required")
    }
  }
}
