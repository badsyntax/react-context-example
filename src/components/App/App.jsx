import React from 'react';
import BpkButton from 'bpk-component-button';
import { BpkGridContainer } from 'bpk-component-grid';

import { UserProfileContainer } from '../UserProfile/UserProfile';
import UserContextProvider, { UserContext } from '../../contexts/UserContext';

import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <UserContextProvider>
    <div className={c('App')}>
      <main className={c('App__main')}>
        <BpkGridContainer>
          <UserContext.Consumer>
            {({ user, addUser, removeUser }) => (
              <React.Fragment>
                <BpkButton onClick={() => addUser({
                name: 'john',
                surname: 'smith',
              })}
                >Click me to add user
                </BpkButton>
                {user.name && (
                  <BpkButton
                    destructive
                    onClick={() => removeUser()}
                  >Remove user
                  </BpkButton>)}
              </React.Fragment>
            )}
          </UserContext.Consumer>
          <UserProfileContainer />
        </BpkGridContainer>
      </main>
    </div>
  </UserContextProvider>
);

export default App;
