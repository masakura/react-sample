const React = require('react');
const TodoStore = require('../stores/TodoStore');
const ActionCreator = require('../actions/TodoActionCreators');
const Button = require('react-bootstrap/lib/Button');
const Jumbotron = require('react-bootstrap/lib/Jumbotron');
const FormGroup = require('react-bootstrap/lib/FormGroup');
const Input = require('react-bootstrap/lib/Input');

const TodoCollection = require('./TodoCollection.jsx');
const TodoInput = require('./TodoInput.jsx');

let App = React.createClass({

  getInitialState() {
    return {
      todos: []
    }
  },

  addTodo(text) {
    this.setState({
      todos: [{text: text}].concat(this.state.todos)
    });
  },

  removeTodo(todo) {
    this.setState({todos: this.state.todos.filter(task => task !== todo)});
  },

  changeInput(e) {
    this.setState({input: e.target.value});
  },

  render() {
    let {todos} = this.state;
    return (
      <div className="container">
        <h2>My Todos</h2>

        <TodoInput onAdd={this.addTodo} />

        <TodoCollection todos={todos} onRemove={this.removeTodo} />
      </div>
    );
  }

});

module.exports = App;
