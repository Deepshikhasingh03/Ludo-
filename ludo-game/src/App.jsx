import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import LoginPage from './components/LoginPage'
import HomePage from './components/Home'



function App() {
 

  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<LoginPage/>}></Route>
       <Route path='/home' element={<HomePage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
