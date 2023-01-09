import { AppDispatch } from './../../store/index';
import { IEvent } from './../../interfaces/IEvent';
import { IUser } from './../../interfaces/IUser';
import { EventActionEnum, SetEventsAction, SetGuestNameAction } from "./types";
import axios from 'axios';


export const SetGuestName = (payload: IUser[]): SetGuestNameAction => ({type: EventActionEnum.SET_GUEST_NAME, payload})

export const SetEvents = (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload})

export const fetchGuest = (): any => async (dispatch: AppDispatch) => {
  try{
    const response = await axios.get('./users.json')
    dispatch(SetGuestName(response.data))
  }catch(e){
    alert(e)
  }
}