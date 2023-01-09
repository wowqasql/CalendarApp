
import { IEvent } from './../../interfaces/IEvent';
import { IUser } from './../../interfaces/IUser';
import { EventAction, EventActionEnum, EventState } from "./types"

const initialState: EventState ={
  guestName: [],
  events: []
}

export const eventReducer = (state = initialState, action: EventAction): EventState => {
  switch(action.type){

    case EventActionEnum.SET_GUEST_NAME :
      return {...state, guestName: action.payload}

    case EventActionEnum.SET_EVENTS :
      return {...state, events: action.payload}

    default:
      return state
  }
}