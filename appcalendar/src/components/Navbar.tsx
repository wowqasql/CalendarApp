import { Layout, Menu, Row } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { logout } from '../reducers/auth/action-creators'
import { RouterName } from '../router'

const Navbar = () => {

  const {isAuth, user} = useTypedSelector(state => state.auth)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  return (
    <Layout.Header>
      <Row justify='end'>
        {isAuth
          ?
          <Menu theme='dark' mode='horizontal' selectable={false}>
            <div style={{color: 'white'}}>{user.username}</div>
            <Menu.Item onClick={() => dispatch(logout())} key={2}>Exit</Menu.Item>
          </Menu>
          :
          <Menu theme='dark' mode='horizontal' selectable={false}>
            <div style={{color: 'white'}}>Welcome!</div>
            <Menu.Item onClick={() => navigate(RouterName.LOGIN)} key={1}>Log in</Menu.Item>
          </Menu>
        }
      
      </Row>
    </Layout.Header>
  )
}

export default Navbar
