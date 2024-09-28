
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './LAYOUT/Layout'
import Home from './PAGES/HOME/Home'
import Error from './PAGES/Error'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Layout>
  )
}

export default App
