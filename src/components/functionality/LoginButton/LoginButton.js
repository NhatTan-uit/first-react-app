import React from 'react'
import Button from 'react-bootstrap/Button';

function LoginButton() {
  return (
    <Button style={{marginLeft: '40px'}} as="input" type="submit" value="Login" />
  )
}

export default LoginButton