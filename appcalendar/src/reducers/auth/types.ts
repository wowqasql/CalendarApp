import { IUser } from './../../interfaces/IUser';


export interface AuthState { // ТИПИЗИРУЕМ STATE
  isAuth: boolean
  user: IUser
  isLoading: boolean
  error: string
}

// Тип для установления занчения для auth
export interface SetAuthAction { // ТИПИЗИРУЕМ ACTION КОНКРЕТНОГО ТИПА
  type: AuthActionEnum.SET_AUTH
  payload: boolean
}
export interface SetUserAction { // ТИПИЗИРУЕМ ACTION КОНКРЕТНОГО ТИПА
  type: AuthActionEnum.SET_USER
  payload: IUser
}
export interface SetIsLoadingAction { // ТИПИЗИРУЕМ ACTION КОНКРЕТНОГО ТИПА
  type: AuthActionEnum.SET_IS_LOADING
  payload: boolean
}

export interface SetErrorAction { // ТИПИЗИРУЕМ ACTION КОНКРЕТНОГО ТИПА
  type: AuthActionEnum.SET_ERROR
  payload: string
}

export enum AuthActionEnum { // ПЕРЕЧИСЛЕНИЯ ДЛЯ ACTION.TYPE, (ДЛЯ УДОБСТВА)
  SET_AUTH = 'SET_AUTH',
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_ERROR = 'SET_ERROR'
}

// ОБОЩАЮЩИЙ ТИП, КОТОРЫЙ СОДЕРЖИТ ВСЕ ТИПЫ ACTION'ОВ ДЛЯ ТОГО, ЧТОБЫ ТИПИЗИРОВАТЬ (action:) в reducer'e
export type AuthAction = SetAuthAction | SetUserAction | SetIsLoadingAction | SetErrorAction