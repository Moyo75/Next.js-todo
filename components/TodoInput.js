import React, { Component } from "react";
import Head from "next/head";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  addTodo(todo) {
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" />
        </Head>
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-primary"
            onClick={() => this.addTodo(this.state.value)}
          >
            Submit
          </button>

          <style scoped>{`
          input {
            width: 80%;
            border: none;
            border-top: 2px solid #7d87e4;
            border-bottom: 2px solid #7d87e4;
            padding: 5px;
            margin-right: 10px;
            line-height: 17px;
          }
          
          input:focus {
            outline: none;
            border: none;
            border-top: 2px solid #7d87e4;
            border-bottom: 2px solid #7d87e4;
          }
          
          .btn {
            padding: 8px;
            border-radius: 3px;
            border-style: solid;
            border-width: 2px;
            box-shadow: none;
            outline: none;
          }
          
          .btn-primary {
            color: #7d87e4;
            border-color: #7d87e4;
            background-color: transparent;
          }
          
          `}</style>
        </div>
      </div>
    );
  }
}
