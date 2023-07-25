import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers, deleteUser } from '../actions/userActions'
import { Link, useNavigate } from 'react-router-dom'

const UserListScreen = () => {
  
  const dispatch = useDispatch()
  const history = useNavigate()

  const userList = useSelector(state => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userDelete = useSelector(state => state.userDelete)
  const { success: successDelete } = userDelete


  useEffect(() => {
      if (userInfo && userInfo.isAdmin) {
          dispatch(listUsers())
      } else {
          history('/login')
      }

  }, [dispatch, history, successDelete, userInfo])


  const deleteHandler = (id) => {

      if (window.confirm('Are you sure you want to delete this user?')) {
          dispatch(deleteUser(id))
      }
  }

  return (
    <div>
      {
        loading ?
        <p>loading</p> :
        error ?
        <p>Error</p> :
        <section className='h-fit w-full md:px-[50px] lg:px-[75px] md:py-[50px] flex flex-col gap-[100px]'>
          <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col md:flex-row items-start gap-[25px] md:gap-[50px]'>
            <div className='h-fit w-full flex flex-col justify-center gap-[25px]'>
              <p className='text-2xl font-semibold'>_Users</p>
              <div className='h-fit w-full flex flex-col'>
                <div className='h-[50px] w-full flex items-center border-b-[1px] border-black border-opacity-5'>                   
                    <p className='w-[10%] opacity-50 capitalize'>id</p>
                    <p className='w-[30%] opacity-50 capitalize'>name</p>
                    <p className='w-[40%] opacity-50 capitalize'>email</p>
                    <p className='w-[20%] opacity-50 capitalize'>admin</p>
                </div>
                {
                  users.map((item) => (
                    <Link key={item._id} to={`/admin/user/${item._id}/edit`} className='h-[50px] w-full flex items-center border-b-[1px] border-black border-opacity-5'>                   
                        <p className='w-[10%] opacity-75 capitalize'>{item._id}</p>
                        <p className='w-[30%] opacity-75 capitalize'>{item.username}</p>
                        <p className='w-[40%] opacity-75 lowercase'>{item.email}</p>
                        <p className='w-[20%] opacity-75 capitalize'>
                        {item.isAdmin ? (
                            <i className='fas fa-check' style={{ color: 'green' }}></i>
                        ) : (
                                <i className='fas fa-check' style={{ color: 'red' }}></i>
                            )}
                        </p>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </section>
      }
    </div>
  )
}

export default UserListScreen