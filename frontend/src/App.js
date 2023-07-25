import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import Header from './components/Header'
import RegisterScreen from './screens/RegisterScreen'
import SearchScreen from './screens/SearchScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import CheckoutScreen from './screens/CheckoutScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import ProfileScreen from './screens/ProfileScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import DashboardScreen from './screens/DashboardScreen'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='/register/' element={<RegisterScreen/>} />
        <Route path='/search/' element={<SearchScreen/>} />
        <Route path='/product/:pid/' element={<ProductScreen/>}/>
        <Route path='/cart/:id?' element={<CartScreen/>}/>
        <Route path='/checkout/' element={<CheckoutScreen/>}/>
        <Route path='/shipping' element={<ShippingScreen/>} />
        <Route path='/payment/' element={<PaymentScreen/>} />
        <Route path='/placeorder/' element={<PlaceOrderScreen/>} />
        <Route path='/profile/' element={<ProfileScreen/>} />
        <Route path='/order/:id' element={<OrderScreen/>} />

        <Route path='/admin/dashboard' element={<DashboardScreen/>} />
        <Route path='/admin/userlist' element={<UserListScreen/>} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen/>} />

        <Route path='/admin/productlist' element={<ProductListScreen/>} />
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>} />

        <Route path='/admin/orderlist' element={<OrderListScreen/>} />
        
      </Routes>
    </Router>
  )
}

export default App