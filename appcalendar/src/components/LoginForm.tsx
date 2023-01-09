import { Form, Input, Button } from 'antd'
import React, { FC, useState } from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { RouterName } from '../router';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/auth/action-creators';
import { useTypedSelector } from '../hooks/useTypedSelector';

const LoginForm: FC = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {error, isLoading} = useTypedSelector(state => state.auth)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  function submit() {
     dispatch(login(user, password))
     navigate(RouterName.EVENT)
 
  }

  return (
    <Form
       onFinish={submit} // Отрабатывает, если в форме что-нибудь введено. Т.е. форма не пустая
    >
      {error && <div style={{color: 'red'}}>
        {error}
      </div>}

       <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}>
        <Input prefix={<UserOutlined />} placeholder="Username" value={user} onChange={e => setUser(e.target.value)} />
        </Form.Item>

        <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input
          prefix={<LockOutlined  />}
          type="password"
          placeholder="Password" 
          value={password}
          onChange={e => setPassword(e.target.value)}
          />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading} >
          Log in
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm