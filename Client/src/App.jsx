
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import AdminDashboard from './Admin/AdminDashboard'
import User from './Admin/User'
import MR from './Admin/MR'
import AddtoProduct from './Admin/AddtoProduct'
import ProductDisplay from './Admin/ProductDisplay'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='login' element={<Login/>}/>
      </Route>
     </Routes>
     <Routes>
      <Route path='admin' element={<AdminDashboard/>}>
      <Route path='addproduct' element={<AddtoProduct/>}/>
      <Route path='user' element={<User/>}/>
      <Route path='mr' element={<MR/>}/>
      <Route path='display' element={<ProductDisplay/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
