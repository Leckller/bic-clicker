import './App.css'
import Bic from './components/Clicker/Bic'
import Layout from './components/Layout/Layout'
import Loja from './components/loja/Loja'
import Status from './components/status/Status'

function App() {

  return (
    <Layout>
      <Bic />
      <Status />
      <Loja />
    </Layout>
  )
}

export default App
