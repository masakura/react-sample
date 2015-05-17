const React = require('react');
const TodoStore = require('../stores/TodoStore');
const ActionCreator = require('../actions/TodoActionCreators');
const Button = require('react-bootstrap/lib/Button');
const Jumbotron = require('react-bootstrap/lib/Jumbotron');
const FormGroup = require('react-bootstrap/lib/FormGroup');
const Input = require('react-bootstrap/lib/Input');

const TodoCollection = require('./TodoCollection.jsx');

let App = React.createClass({

  getInitialState() {
    return {
      todos: [],
      input: ''
    }
  },

  addTodo() {
    this.setState({
      todos: [{text: this.state.input}].concat(this.state.todos),
      input: ''
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
        <form role="form">
          <div className="row">
            <div className="input-group">
              <input type="text" className="form-control" value={this.state.input} onChange={this.changeInput} />
              <span className="input-group-btn">
                <Button type="button" className="btn-primary" onClick={this.addTodo}>Add</Button>
              </span>
            </div>
          </div>
        </form>

        <TodoCollection todos={todos} onRemove={this.removeTodo} />
      </div>
    );
  }

});

module.exports = App;
