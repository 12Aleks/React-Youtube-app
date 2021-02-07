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
        return(
          <li style={style.li}>
              <span style={{marginRight: '1rem'}}>{this.props.user.id}.  {this.props.user.name}</span>
              <button onClick={() => {this.props.deleteElement(this.props.user.id)}}>Delete</button>
          </li>
        )
    }
}

User.propTypes = {
    name: PropTypes.string
}

export default User