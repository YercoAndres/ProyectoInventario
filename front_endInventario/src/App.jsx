import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage'
import Login from "./pages/Login"
import Register from "./pages/Register"
import { ToastContainer } from 'react-toastify';


function App() {
 

  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
    <ToastContainer
      position="top-center"
      autoClose={4000}
      theme="colored"
      />
    </>
  )
}

export default App
