import { ComponentType } from "react"
import Event from "../pages/Event"
import Login from "../pages/Login"

export interface IRoute {
  path: string
  component: ComponentType
  exact?: boolean
}

export const enum RouterName {
  LOGIN = '/login',
  EVENT ='/'
}

export const privateRoutes: IRoute[] = [ // Просмотреть календарь - пускаем только авторизованных пользователей
  {path: RouterName.EVENT, component: Event }
]
export const publicRoutes: IRoute[] = [ // Ввести логин и пароль - пускаем всех пользователей
  {path: RouterName.LOGIN, component: Login }
]
