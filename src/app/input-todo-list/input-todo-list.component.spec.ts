import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTodoListComponent } from './input-todo-list.component';

describe('InputTodoListComponent', () => {
  let component: InputTodoListComponent;
  let fixture: ComponentFixture<InputTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
