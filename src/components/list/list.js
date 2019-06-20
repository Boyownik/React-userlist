import React from 'react'
import './list.css'


class List extends React.Component {
    render () {
        const userList = this.props.users.map((element, index) => <li order={index} onClick={this.props.removeUser}>{element}</li>);
        return (
            <div className="list">
                <button onClick={this.props.clearList}>Remove all</button>
                <ul>{userList}</ul>
            </div>
        )
    }
}
export default List;