import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    // const redirect = location.search ? location.search.split('=')[1] : '/'

    const redirect = location.search ? `/${location.search.split('=')[1]}/` : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            history(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

  return (
    <section className='h-screen w-screen '>
      <div className='h-full w-full md:px-[50px] lg:px-[75px]'>
        <div className='h-full w-full max-w-[1024px] mx-auto flex md:items-center justify-center md:justify-start'>
          <form onSubmit={submitHandler} className='h-fit w-full md:w-fit py-[25px] md:py-[100px] px-[15px] md:px-[50px] md:bg-white'>

            {/* title */}
            <div className='h-fit w-full md:w-[350px] pb-[25px] md:pb-[10px]'>
              <Link to={'/'} className='text-3xl font-medium text-10'>Simple.</Link>
            </div>
            
            {/* input */}
            <div className='h-fit w-full mt-[25px] flex flex-col gap-[5px]'>

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
                  <input autoComplete={false} autoSave={false} required={true} value={email} onChange={(e) => setEmail(e.target.value)} className='relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
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
            <div className='h-[50px] w-full'>
              <Message color={'red'} >{error}</Message>
              {loading && <Loader/> }
            </div>
            {/* forgot password */}
            <div className='h-fit w-full flex justify-end items-center pb-[25px]'>
                  <button className='text-sm capitalize text-right hover:text-10 duration-100'>forgot password</button>
            </div>

            {/* submit */}
            <button type='submit' className='h-[50px] w-full bg-10 capitalize text-white'>
                Login
            </button>

            {/* register */}
            <div className='h-[50px] w-full flex items-center justify-center'>
              <p className='text-sm capitalize'>i don’t have an account. <Link to={'/register/'} className='text-10'>sign in</Link></p>
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginScreen