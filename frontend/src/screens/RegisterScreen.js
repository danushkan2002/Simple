import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'


const RegisterScreen = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            history(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password != confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }

    }

  return (
    <section className='h-screen w-screen md:bg-30'>
      <div className='h-full w-full md:px-[50px] lg:px-[75px] '>
        <div className='h-full w-full max-w-[1024px] mx-auto flex md:items-center justify-center md:justify-start'>
          <form onClick={submitHandler} className='h-fit w-full md:w-fit py-[25px] md:py-[100px] px-[15px] md:px-[50px] md:bg-white'>

            {/* title */}
            <div className='h-fit w-full md:w-[350px] pb-[25px] md:pb-[10px]'>
              <Link to={'/'} className='text-3xl font-medium text-10'>Simple.</Link>
            </div>
            
            {/* input */}
            <div className='h-fit w-full mt-[25px] flex flex-col gap-[5px]'>

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

              <div className='h-[50px] w-full'>
                <div className={
                  confirmPassword === "" ?
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-5 duration-100':
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-10 duration-100'
                }>
                  <p className={
                    confirmPassword === "" ?
                    'opacity-25 absolute top-1/2 transform -translate-y-1/2 duration-100 z-0':
                    'text-xs opacity-50 absolute top-0 transform -translate-y-1/2 duration-100 z-0'
                  }>Confirm Password</p>
                  <input type='password' autoComplete={false} autoSave={false} required={true} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
                </div>
              </div>

            </div>

            <div className='h-[50px] w-full'>
              <Message color={'red'} >{error}</Message>
              {loading && <Loader/> }
            </div>

            {/* submit */}
            <button type='submit' className='h-[50px] w-full bg-10 capitalize text-white mt-[25px]'>
                register
            </button>

            {/* register */}
            <div className='h-[50px] w-full flex items-center justify-center'>
              <p className='text-sm capitalize'>i already have an account. <Link to={'/login/'} className='text-10'>sign up</Link></p>
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}

export default RegisterScreen