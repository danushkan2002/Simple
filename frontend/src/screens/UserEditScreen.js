import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUser } from '../actions/userActions'
import { USER_UPDATE_RESET } from '../constants/userConstants'

const UserEditScreen = () => {
  const {id} = useParams()
  const history = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const dispatch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)
  const { error, loading, user } = userDetails

  const userUpdate = useSelector(state => state.userUpdate)
  const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = userUpdate

  useEffect(() => {

      if (successUpdate) {
          dispatch({ type: USER_UPDATE_RESET })
          history.push('/admin/userlist')
      } else {

          if (!user.name || user._id !== Number(id)) {
              dispatch(getUserDetails(id))
          } else {
              setName(user.name)
              setEmail(user.email)
              setIsAdmin(user.isAdmin)
          }
      }

  }, [user, id, successUpdate, history])

  const submitHandler = (e) => {
      e.preventDefault()
      dispatch(updateUser({ _id: user._id, name, email, isAdmin }))
  }

  return (
    <div>
      <section className='h-fit w-full md:px-[50px] lg:px-[75px] md:py-[50px] flex flex-col gap-[100px] bg-30'>
        <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col md:flex-row items-start gap-[25px] md:gap-[50px]'>
          <form onSubmit={submitHandler} className='h-fit w-full md:w-fit py-[25px] md:py-[50px] px-[15px] md:px-[50px] md:bg-white'>

            {/* title */}
            <div className='h-fit w-full md:w-[350px] pb-[25px] md:pb-[10px]'>
              <buttonk to={'/'} className='text-3xl font-medium text-black'>Edit user.</buttonk>
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

              <div className='h-fit w-full'>
                <div className='h-[50px] w-full flex items-center gap-[15px] duration-100'>
                  
                  <input type='checkbox' name='paymentMethod' autoComplete={false} autoSave={false} required={true} 
                  checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} 
                  className='relative z-20 h-[24px] w-[24px] p-[10px] focus:bg-10 focus:text-10 outline-none bg-transparent'></input>
                  <p className='opacity-50 duration-100 z-0'>Admin </p>
                </div>
              </div>

            </div>

            {/* submit */}
            <button type='submit' className='h-[50px] w-full bg-10 capitalize text-white mt-[25px]'>
                update
            </button>

          </form>
        </div>
      </section>
    </div>
  )
}

export default UserEditScreen