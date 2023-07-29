import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { listMyOrders } from '../actions/orderActions'

const ProfileScreen = () => {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()
  const history = useNavigate()

  const userDetails = useSelector(state => state.userDetails)
  const { error, loading, user } = userDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const orderListMy = useSelector(state => state.orderListMy)
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy


  useEffect(() => {
      if (!userInfo) {
          history('/login')
      } else {
          if (!user || !user.name || success || userInfo._id !== user._id) {
              dispatch({ type: USER_UPDATE_PROFILE_RESET })
              dispatch(getUserDetails('profile'))
              dispatch(listMyOrders())
          } else {
              setName(user.name)
              setEmail(user.email)
          }
      }
  }, [dispatch, history, userInfo, user, success])

  const submitHandler = (e) => {
      e.preventDefault()

      if (password != confirmPassword) {
          setMessage('Passwords do not match')
      } else {
          dispatch(updateUserProfile({
              'id': user._id,
              'name': name,
              'email': email,
              'password': password
          }))
          setMessage('')
      }

  }

  return (
    <div>
      <section className='h-fit w-full md:px-[50px] lg:px-[75px] md:py-[50px] flex flex-col gap-[100px]'>
        <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col md:flex-row items-start gap-[25px] md:gap-[50px]'>
          <div>
            <form  onSubmit={submitHandler} className='h-fit w-full md:w-[400px] md:bg-30  py-[25px] md:py-[50px] px-[15px] md:px-[50px]'>
              {/* input */}
              <div className='h-fit w-ful mt-[25px] flex flex-col gap-[5px]'>

                <div className='h-[50px] w-full'>
                  <div className={
                    name === "" ?
                    'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-5 duration-100':
                    'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-10 duration-100'
                  }>
                    <p className={
                      name === "" ?
                      'opacity-25 absolute top-1/2 transform -translate-y-1/2 duration-100 z-0':
                      'text-xs opacity-50 absolute top-0 transform -translate-y-1/2 duration-100 z-0'
                    }>Username</p>
                    <input type='text' autoComplete={false} autoSave={false} required={true} value={name} onChange={(e) => setName(e.target.value)} className='relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
                  </div>
                </div>

                <div className='h-[50px] w-full'>
                  <div className={
                    email === "" ?
                    'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-5 duration-100':
                    'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-10 duration-100'
                  }>
                    <p className={
                      email === "" ?
                      'opacity-25 absolute top-1/2 transform -translate-y-1/2 duration-100 z-0':
                      'text-xs opacity-50 absolute top-0 transform -translate-y-1/2 duration-100 z-0'
                    }>Email Address</p>
                    <input type='email' autoComplete={false} autoSave={false} required={true} value={email} onChange={(e) => setEmail(e.target.value)} className='relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
                  </div>
                </div>

                <div className='h-[50px] w-full'>
                  <div className={
                    password === "" ?
                    'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-5 duration-100':
                    'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-10 duration-100'
                  }>
                    <p className={
                      password === "" ?
                      'opacity-25 absolute top-1/2 transform -translate-y-1/2 duration-100 z-0':
                      'text-xs opacity-50 absolute top-0 transform -translate-y-1/2 duration-100 z-0'
                    }>Password</p>
                    <input type='password' autoComplete={false} autoSave={false} required={true} value={password} onChange={(e) => setPassword(e.target.value)} className='relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
                  </div>
                </div>
                              
              </div>

              {/* submit */}
              <button type='submit' className='h-[50px] w-full bg-10 capitalize text-white mt-[25px]'>
                  update
              </button>

            </form>
          </div>
          <div className='h-fit w-full flex flex-col gap-[25px]'>
              <div className='h-fit w-full '>
                  <p className='text-2xl font-semibold'>_My orders</p>
              </div>
              {
                loadingOrders ?
                <p>Loading</p> :
                errorOrders ?
                <p>Error</p> :
                <div className='h-fit w-full'>
                  <div className='h-[50px] w-full flex items-center border-b-[1px] border-black border-opacity-5'>                   
                      <p className='w-[10%] opacity-50 capitalize'>id</p>
                      <p className='w-[20%] opacity-50 capitalize'>date</p>
                      <p className='w-[30%] opacity-50 capitalize'>Total</p>
                      <p className='w-[20%] opacity-50 capitalize'>Paid</p>
                      <p className='w-[20%] opacity-50 capitalize'>Delivered</p>
                  </div>
                  {
                    orders.map(item => (
                      <Link to={`/order/${item._id}`} key={item._id} className='h-[50px] w-full flex items-center'>                   
                        <p className='text-sm capitalize w-[10%] opacity-75 '>{item._id}</p>
                        <p className='text-sm capitalize w-[20%] opacity-75 '>{item.createdAt.substring(0, 10)}</p>
                        <p className='text-sm capitalize w-[30%] opacity-75 '>LKR {item.totalPrice}</p>
                        <p className='text-sm capitalize w-[20%] opacity-75 '>{item.isPaid ? item.paidAt.substring(0, 10) :<p>Not Paid</p>}</p>
                        <p className='text-sm capitalize w-[20%] opacity-75 '>Delivered</p>
                    </Link>
                    ))
                  }
                </div>
              }
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProfileScreen