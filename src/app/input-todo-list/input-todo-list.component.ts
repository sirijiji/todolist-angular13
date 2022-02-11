import { Component, OnInit } from '@angular/core';
import {Item} from "./item";

@Component({
  selector: 'app-input-todo-list',
  templateUrl: './input-todo-list.component.html',
  styleUrls: ['./input-todo-list.component.css']
})
export class InputTodoListComponent implements OnInit {

  items: Array<Item> = [];

  constructor() { }

  ngOnInit(): void {
    this.items = new Array<Item>();
  }

  addItem(value: string) {
    this.items.push(new Item(value));
  }

  removeItem(value: string) {
    this.items = this.items.filter(it => it.value !== value);
  }
}
