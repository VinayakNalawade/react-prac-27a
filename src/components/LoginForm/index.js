import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: false, errorMsg: ''}

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}

    if (username === '') {
      this.setState({errorMsg: 'Please enter Username', error: true})
      return
    }

    if (password === '') {
      this.setState({errorMsg: 'Please enter Password', error: true})
      return
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const loginrequest = await fetch('https://apis.ccbp.in/login', options)

    const result = await loginrequest.json()

    if (loginrequest.ok) {
      const {history} = this.props

      history.replace('/')
    } else {
      this.setState({errorMsg: result.error_msg, error: true})
    }
  }

  render() {
    const {errorMsg, username, password, error} = this.state

    return (
      <div className="loginPage">
        <img
          className="loginpageimg"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="loginForm" onSubmit={this.onSubmit}>
          <img
            className="loginpagelogo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <img
            className="loginpageformimg"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
          <label className="loginlabel" htmlFor="username">
            USERNAME
          </label>
          <input
            id="username"
            className="forminput"
            placeholder="Username"
            type="text"
            onChange={this.changeUsername}
            value={username}
          />
          <label className="loginlabel" htmlFor="password">
            PASSWORD
          </label>
          <input
            id="password"
            className="forminput"
            placeholder="Password"
            type="password"
            onChange={this.changePassword}
            value={password}
          />
          <button type="submit" className="loginbutton">
            Login
          </button>
          {error && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
