

import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Form from './components/form'
import './App.css'
import Navbar from './components/navbar'

function App() {


  return (
  <BrowserRouter>
  <Navbar> </Navbar>
  <Routes>
    <Route path="/" element={<Form></Form>}></Route>

  </Routes>
  </BrowserRouter>
  )
}

export default App
