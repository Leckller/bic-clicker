import './App.css'
import Bic from './components/Clicker/Bic'
import BicClass from './components/Clicker/BicClass'
import Layout from './components/Layout/Layout'
import Loja from './components/loja/Loja'
import Status from './components/status/Status'
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks'

function App() {
  const dispatch = useAppDispatch();
  const selector = useAppSelector(state => state);
  BicClass.setHooks(dispatch, selector);

  return (
    <Layout>
      <Bic />
      <Status />
      <Loja />
    </Layout>
  )
}

export default App
