const React = require('react');
const Todo = require('./Todo.jsx');

let TodoCollection = React.createClass({
  getInitialState() {
    return {
      todos: []
    };
  },

  removeTodo(todo) {
    this.props.onRemove(todo);
  },

  render() {
    let {todos} = this.props;

    return (
      <div>
        {todos.map(todo => <Todo todo={todo} onRemove={this.removeTodo} />)}
      </div>
    );
  }
});

module.exports = TodoCollection;
