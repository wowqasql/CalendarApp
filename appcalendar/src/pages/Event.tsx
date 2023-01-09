import userEvent from '@testing-library/user-event'
import { Button, Layout, Modal, Row } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { fetchGuest } from '../reducers/event/action-creator'

// onCancel - закрывает окно
// visible - если состояние тру - показывает модальное окно

const Event: FC = () => {

  const [modalVisible, setModalVisible] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGuest())
  },[])

  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify='center'>
        <Button onClick={() => setModalVisible(true)} >Add Event</Button>
      </Row>
      <Modal title='Add Event' visible={modalVisible} footer={null} onCancel={() => setModalVisible(false)}>
        <EventForm />
      </Modal>
    </Layout>

  )
}

export default Event