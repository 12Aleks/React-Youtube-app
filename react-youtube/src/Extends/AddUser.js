import React from 'react'

export default class AddUser extends React.Component {
    state = {
        name: '',
        age: 0,
        validName: false,
        validAge: false,
    };
    addUser = (e) => {
        e.preventDefault();
        if (this.state.validName === true && this.state.validAge === true) {
            this.props.addedUsers({
                name: this.state.name,
                age: this.state.age
            });
            this.setState({
                name: '',
                age: 0,
            });
        } else {
            alert("Change your data")
        }

    };

    validationName(name) {
        return name.length > 2
    }

    addName(event) {
        let res = this.validationName(event.target.value);

        this.setState({name: event.target.value, validName: res})

    };

    validationAge(n) {
        return n > 20
    }

    addAge(event) {
        let res = this.validationAge(event.target.value);
        this.setState({age: event.target.value, validAge: res})

    }

    render() {
        let colorName = this.state.validName ? 'green' : 'red';
        let colorAge = this.state.validAge ? 'green' : 'red';

        return (
            <form onSubmit={this.addUser}>
                <input type="text" value={this.state.name}
                       onChange={(event) => this.addName(event)}
                       style={{borderColor: colorName}}
                />
                <input type="number" value={this.state.age}
                       onChange={(event) => this.addAge(event)}
                       style={{borderColor: colorAge}}
                />
                <button type="submit">Add user</button>
            </form>
        )
    }
}