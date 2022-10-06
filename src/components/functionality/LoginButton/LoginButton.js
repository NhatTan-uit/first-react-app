import React from 'react'
import Button from 'react-bootstrap/Button';
import './LoginButton.css'

function LoginButton() {
  return (
    <Button className="login-button" as="input" type="submit" value="Login" />
  )
}

export default LoginButton