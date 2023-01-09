import { Card, Layout, Row } from 'antd'
import React, { FC } from 'react'
import '../'
import LoginForm from '../components/LoginForm'

const Login: FC = () => {
  return (
  
    <Layout>
      <Row justify='center' align='middle' className='height'>
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  )
}

export default Login