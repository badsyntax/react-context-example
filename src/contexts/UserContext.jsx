import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  user: {
    name: '',
    surname: '',
  },
};

export const UserContext = React.createContext(initialState);

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      ...{
        addUser: this.addUser.bind(this),
        removeUser: this.removeUser.bind(this),
      },
    };
  }

  addUser(user) {
    this.setState({
      user,
    });
  }

  removeUser() {
    this.setState({ ...initialState });
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
