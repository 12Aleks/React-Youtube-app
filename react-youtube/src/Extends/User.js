import React from 'react'
import PropTypes from 'prop-types'

const style = {
    li: {
        padding: '.3rem'
    }
}

class User extends React.Component {
    state = {
        name: 'Aleks'
    };

    render() {
        return (
            <tr style={style.li}>
                <td>
                    {this.props.user.id}
                </td>
                <td>
                    {this.props.user.name}
                </td>
                <td>
                    {this.props.user.age}
                </td>
                <td>
                    <button onClick={() => {
                        this.props.deleteElement(this.props.user.id)
                    }}>Delete
                    </button>
                </td>
            </tr>
        )
    }
}

User.propTypes = {
    name: PropTypes.string
}

export default User