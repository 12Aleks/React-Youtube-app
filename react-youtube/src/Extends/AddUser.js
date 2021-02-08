import React from 'react'

export default class AddUser extends React.Component {
    state = {
        name: '',
        age: 0
    };
    addUser = (e) => {
        e.preventDefault();
        this.props.addedUsers({
            name: this.state.name,
            age: this.state.age
        });
        this.setState({
            name: '',
            age: 0
        });
    }

    render() {
        return (
            <form onSubmit={this.addUser}>
                <input type="text" value={this.state.name}
                       onChange={(event) => this.setState({name: event.target.value})}/>
                <input type="number" value={this.state.age}
                       onChange={(event) => this.setState({age: event.target.value})}/>
                <button type="submit">Add user</button>
            </form>
        )
    }
}