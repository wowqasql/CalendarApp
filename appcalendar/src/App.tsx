import { Layout } from 'antd';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { IUser } from './interfaces/IUser';
import { setIsAuthActionCreator, setUserActionCreator } from './reducers/auth/action-creators';


const App: FC = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem('auth')){
      dispatch(setUserActionCreator({username: localStorage.getItem('username' || '')} as IUser))
      dispatch(setIsAuthActionCreator(true))
    }
  }, [])

  return (
    <div>
      <Layout>
        <Navbar />
        <Layout.Content>
          <AppRouter />
        </Layout.Content>
      </Layout>

    </div>
  );
}

export default App;
