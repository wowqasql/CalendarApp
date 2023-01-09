import { FC } from 'react';

import axios from "axios"
import { IUser } from "../../interfaces/IUser"
import { AppDispatch } from "../../store"
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types"


export const setIsAuthActionCreator = (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth})

export const setUserActionCreator = (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user})

export const setIsLoadingActionCreator = (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload})

export const SetErrorActionCreator = (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload})





export const login = (username: string, password: string): any =>  async (dispatch: AppDispatch) => {

    try {
      dispatch(setIsLoadingActionCreator(true))
      const response = await axios.get<IUser[]>('./users.json')
      const mockUser = response.data.find(user => user.username === username && user.password === password)
      console.log(mockUser)

      if(mockUser){
        localStorage.setItem('auth', 'true')
        localStorage.setItem('username', mockUser.username)
        dispatch(setIsAuthActionCreator(true))
        dispatch(setUserActionCreator(mockUser))

      }else{  
        dispatch(SetErrorActionCreator('Неверный логин или пароль'))
        dispatch(setIsAuthActionCreator(false))
      }

      dispatch(setIsLoadingActionCreator(false))

    } catch (e) {
      dispatch(SetErrorActionCreator('Ошибка логина'))
    }
}

export const logout = ():any => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
    dispatch(setIsAuthActionCreator(false))
    dispatch(setUserActionCreator({} as IUser))

}