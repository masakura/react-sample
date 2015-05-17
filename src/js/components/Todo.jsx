const React = require('react');
const Input = require('react-bootstrap/lib/Input');
const Button = require('react-bootstrap/lib/Button');

let Todo = React.createClass({
  getInitialState() {
    return {
      todo: {
        text: ''
      }
    };
  },

  removeTodo(todo) {
    this.props.onRemove(todo);
  },

  render() {
    let {todo} = this.props;
    return (
      <div className="input-group">
        <Input type="text" value={todo.text} />
        <span className="input-group-btn">
          <Button type="text" className="btn-danger" aria-label="Remove" onClick={this.removeTodo.bind(this, todo)}>X</Button>
        </span>
      </div>
    );
  }
});

module.exports = Todo;
