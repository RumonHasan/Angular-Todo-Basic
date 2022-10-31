import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistDisplayComponent } from './todolist-display.component';

describe('TodolistDisplayComponent', () => {
  let component: TodolistDisplayComponent;
  let fixture: ComponentFixture<TodolistDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
