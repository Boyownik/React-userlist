import React from 'react';
import './app-top.css'


class Top extends React.Component {
    render () {
      return (
        <div className="App-top">
          <form>
            <label>
              Name:
              <input type="text" name="name" id="username" value={this.props.inputValue} onChange={this.props.changeValue}/>
              </label>
              <input type="submit" value="Add" onClick={this.props.addUser}/>
          </form>
        </div>
      );
    }
  }
  export default Top;