import { Calendar } from 'antd'
import React, { FC } from 'react'
import { IEvent } from '../interfaces/IEvent'

interface EventCalendarProps{
  events: any //IEvent[]
}

const EventCalendar: FC<EventCalendarProps> = () => {
  return (
    <Calendar />
  )
}

export default EventCalendar