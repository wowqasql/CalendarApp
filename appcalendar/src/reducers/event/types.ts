import { IEvent } from './../../interfaces/IEvent';
import { IUser } from './../../interfaces/IUser';

export interface EventState {
  guestName: IUser[]
  events: IEvent[]
}

export enum EventActionEnum {
  SET_GUEST_NAME = 'SET_GUEST_NAME',
  SET_EVENTS = 'SET_EVENTS'
}

export interface SetGuestNameAction {
  type: EventActionEnum.SET_GUEST_NAME
  payload: IUser[]
}

export interface SetEventsAction {
  type: EventActionEnum.SET_EVENTS
  payload: IEvent[]
}

export type EventAction = SetGuestNameAction | SetEventsAction