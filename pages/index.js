import React, { Component } from "react";
import Head from "next/head";

import Header from "../components/Header";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";

import fetch from "isomorphic-unfetch";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  static async getInitialProps() {
    const res = await fetch("http://localhost:3000/todos");
    const data = await res.json();
    return {
      todoList: data.todos
    };
  }

  componentWillMount() {
    this.setState({
      todos: this.props.todoList
    });
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();

    todos.push({ id: this.state.nextId, text: todoText });
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title>My styled page</title>
        </Head>
        <div className="Index">
          <div className="todo-wrapper">
            <Header />
            <TodoInput todoText="" addTodo={this.addTodo} />
            <ul>
              {this.state.todos.map(todo => {
                return (
                  <TodoItem
                    todo={todo.text}
                    key={todo.id}
                    id={todo.id}
                    removeTodo={this.removeTodo}
                  />
                );
              })}
            </ul>
          </div>

          <style scoped>{`
          .Index {
            text-align: center;
          }
          
          .todo-wrapper {
            margin: 20px auto;
            padding: 20px;
            min-height: 600px;
            border: 5px solid #7d87e4;
            width: 500px;
          }
          `}</style>
        </div>
      </div>
    );
  }
}
