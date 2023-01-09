import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

// Создаем константу, ей присваиваем тип того состояния, который будем получать и присваиваем useSelector - теперь это useSelector со всеми типами состояния auth
// TypedUseSelectorHook<RootState> - тип состояния
// = useSelector - переменной useTypedSelector присваиваем useSelector - теперь это useSelector со всеми типами состояния auth