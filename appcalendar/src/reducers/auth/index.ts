import { act } from '@testing-library/react';
import { IUser } from './../../interfaces/IUser';
import { AuthAction, AuthActionEnum, AuthState } from "./types"

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: ""
}

// Здесь через : указывается тип значения, которое возвращает функция(тип возвращаемого значения),т.к. функция возвращает state, то тип у редюсера будет такой же как у state

export const authReducer = (state = initialState, action: AuthAction): AuthState => { 
  switch(action.type){

    case AuthActionEnum.SET_AUTH :
      return  {...state, isAuth: action.payload, isLoading: false}
      

    case AuthActionEnum.SET_USER :
      return {...state, user: action.payload }

    case AuthActionEnum.SET_IS_LOADING :
      return {...state, isLoading: action.payload}

    case AuthActionEnum.SET_ERROR :
      return {...state, error: action.payload, isLoading: false}

    default:
      return state
  }
}

