import React from 'react';
import { fakeAuth } from '../helpers/helpers';
import { withRouter } from 'react-router-dom';

export default withRouter(({history}) => {
  return (
    fakeAuth.isAuthenticated === true 
      ? (<p>
          Welcome! <button onClick={() => { 
            fakeAuth.signOut(() => history.push('/'))
            }}>Sign Out</button>
        </p>)
      : (<p>You are not logged in.</p>)
  )
})
