import React from 'react';
import { Redirect } from 'react-router-dom';
import { fakeAuth } from '../helpers/helpers';

export default class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  
  render() {
    const { redirectToReferrer } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (redirectToReferrer === true ) {
      return (
        <Redirect to={from} />
      )
    }
    
    return (
      <div>
        <h3>You must log in to view this page at {from.pathname}</h3>
        <button onClick={this.login} >Log In</button>
      </div>
    )
  }
}