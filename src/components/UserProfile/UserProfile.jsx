import React from 'react';
import PropTypes from 'prop-types';

import { UserContext } from '../../contexts/UserContext';

const UserProfile = ({ user }) => (
  <div>
    User name: {user.name}
  </div>
);

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default UserProfile;

export const UserProfileContainer = () => (
  <UserContext.Consumer>
    {({ user }) => <UserProfile user={user} />}
  </UserContext.Consumer>
);

