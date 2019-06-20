import React from 'react';
import './App.css';
import Top from './components/app-top/app-top'
import List from './components/list/list'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      users: []
    }
  }
  changeValue = (e) => {
    e.preventDefault();
    this.setState({
      inputValue: e.target.value
    });
  }
  addUser = (e) => {
    if (this.state.inputValue.length === 0) {
      alert('Put your name');
    }else {
      e.preventDefault();
      this.state.users.push(this.state.inputValue);
      this.setState({
        inputValue: "",
      })
    }
  }
  removeUser = (e) => {
    this.setState ({
      names: this.state.users.splice(e.target.getAttribute('order'),1),
    })
  }

  clearList = () => {
    this.setState({
      users: [],
    })
  }
  render () {
    return (
      <div className="App">
        <Top inputValue={this.state.inputValue} changeValue={this.changeValue} addUser={this.addUser}/>
        <List users={this.state.users} removeUser={this.removeUser} clearList={this.clearList}/>
      </div>
    );
  }
}

export default App;
