import React, { Component } from "react";
import Head from "next/head";

export default class TodoItem extends Component {
  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" />
        </Head>
        <div className="todoWrapper">
          <button
            className="removeTodo"
            onClick={e => this.removeTodo(this.props.id)}
          >
            remove
          </button>
          {this.props.todo}

          <style scoped>{`
          .todoWrapper {
            border-bottom: 1px solid #efefef;
            text-align: left;
            margin-bottom: 10px;
          }

          .removeTodo {
            background-color: transparent;
            border-color: #ec3939;
            color: #ec3939;
            padding: 8px;
            border-style: solid;
            border-radius: 3px;
            border-width: 2px;
            box-shadow: none;
            outline: none;
            margin-bottom: 10px;
            margin-right: 20px;
          }
          
          `}</style>
        </div>
      </div>
    );
  }
}
