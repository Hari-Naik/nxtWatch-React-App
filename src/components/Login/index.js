import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Context from '../../context/Context'

import {
  LoginContainer,
  LoginFormContainer,
  WebsiteLogo,
  FormContainer,
  Label,
  Input,
  CheckboxContainer,
  CheckboxInput,
  ShowPasswordText,
  Button,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    isChecked: false,
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState(prevState => ({
      showErrorMsg: !prevState.showErrorMsg,
      errorMsg,
    }))
  }

  submitForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const LoginUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(LoginUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onClickCheckBox = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value

          const {
            password,
            username,
            isChecked,
            showErrorMsg,
            errorMsg,
          } = this.state
          const inputType = isChecked ? 'text' : 'password'

          const jwtToken = Cookies.get('jwt_token')

          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }

          const logo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer darkMode={isDark}>
              <LoginFormContainer darkMode={isDark}>
                <WebsiteLogo src={logo} alt="website logo" />
                <FormContainer onSubmit={this.submitForm}>
                  <Label htmlFor="username" darkMode={isDark}>
                    USERNAME
                  </Label>
                  <>
                    <Input
                      darkMode={isDark}
                      id="username"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={this.onChangeUsername}
                    />
                  </>
                  <Label htmlFor="password" darkMode={isDark}>
                    PASSWORD
                  </Label>
                  <>
                    <Input
                      darkMode={isDark}
                      id="password"
                      type={inputType}
                      placeholder="Password"
                      value={password}
                      onChange={this.onChangePassword}
                    />
                  </>
                  <CheckboxContainer>
                    <CheckboxInput
                      type="checkbox"
                      id="checkbox"
                      onChange={this.onClickCheckBox}
                    />
                    <ShowPasswordText htmlFor="checkbox" isDark={isDark}>
                      Show Password
                    </ShowPasswordText>
                  </CheckboxContainer>
                  <Button type="submit">Login</Button>
                  {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </FormContainer>
              </LoginFormContainer>
            </LoginContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Login
