
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
import Dashboard from './Admin/Dashboard'
import MRDisplay from './Admin/MRDisplay'
import UserDisplay from './Admin/UserDisplay'
import Customer from './Pages/Customer'
import Kyc from './Pages/KycCustomer'
import CustomerLogin from './Pages/CustomerLogin'
// import KycCheck from './Admin/AdminKycCheck'
import CustomerKycDisplay from './Admin/CustomerkycDisplay'

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
      <Route path='customer' element={<Customer/>}/>
      <Route path='kyc' element={<Kyc/>}/>
      <Route path='customerLogin' element={<CustomerLogin/>}/>
      </Route>
     </Routes>
     <Routes>
      <Route path='admin' element={<AdminDashboard/>}>
      <Route path='addproduct' element={<AddtoProduct/>}/>
      <Route path='user' element={<User/>}/>
      <Route path='mr' element={<MR/>}/>
      <Route path='display' element={<ProductDisplay/>}/>
      <Route path='dashbord' element={<Dashboard/>}/>
      <Route path='mrdisplay' element={<MRDisplay/>}/>
      <Route path='userdisplay' element={<UserDisplay/>}/>
      {/* <Route path='kyccheck' element={<KycCheck/>}/> */}
      <Route path='kyccustomer' element={<CustomerKycDisplay/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
