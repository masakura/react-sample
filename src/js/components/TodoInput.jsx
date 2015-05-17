const React = require('react');
const Button = require('react-bootstrap/lib/Button');
const Input = require('react-bootstrap/lib/Input');

let TodoInput = React.createClass({
  getInitialState() {
    return {
      input: ''
    };
  },

  changeInput(e) {
    this.setState({input: e.target.value});
  },

  addTodo() {
    this.props.onAdd(this.state.input);
    this.setState({input: ''});
  },

  render() {
    return (
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
    );
  }
});

module.exports = TodoInput;
