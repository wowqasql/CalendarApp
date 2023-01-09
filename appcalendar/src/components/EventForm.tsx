import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { Option } from 'antd/es/mentions'
import { Moment } from 'moment'
import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../interfaces/IEvent'
import { SetEvents } from '../reducers/event/action-creator'

const EventForm: FC = () => {

  const dispatch = useDispatch()

  const {guestName} = useTypedSelector(state => state.event)

  const {user} = useTypedSelector(state => state.auth)

  const [event, setEvent] = useState<IEvent>({
    authorName: user.username,
    guestName: '',
    date: '',
    desc: ''
  })

  const getDat = (date: any) => { 
    const resDate = date.$y.toString() + '.' + date.$H.toString() + '.' + date.$D.toString()
    setEvent({...event, date: resDate})
  }

  const submitForm = () => {
    dispatch(SetEvents(event))
    console.log(event)
  }
  return (
    <Form onFinish={submitForm}>
      <Form.Item
        name="Event name"
        rules={[{ required: true, message: 'Please input event name!' }]}>
        <Input placeholder='Event name' value={event.desc} onChange={e => setEvent({...event, desc: e.target.value})} />
      </Form.Item >

      <FormItem>
        <DatePicker onChange={(date) => getDat(date)}/>
      </FormItem>

      <FormItem>
        <Select placeholder='Select guest name' onChange={guestName => setEvent({...event, guestName})}>
          {guestName.map(u => <Select.Option value={u.username} key={u.username}>{u.username}</Select.Option>)}
        </Select>
      </FormItem>

      <FormItem>
        <Row justify='end'>
          <Button type="primary" htmlType="submit">Create</Button>
        </Row>
      </FormItem>

    </Form>


  )
}

export default EventForm