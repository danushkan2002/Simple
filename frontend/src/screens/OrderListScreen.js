import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { listOrders } from '../actions/orderActions'
import { Link, useNavigate } from 'react-router-dom'

const OrderListScreen = () => {
  const dispatch = useDispatch()
  const history = useNavigate()

    const orderList = useSelector(state => state.orderList)
    const { loading, error, orders } = orderList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin



    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listOrders())
        } else {
            history('/login')
        }

    }, [dispatch, history, userInfo])
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
              <p className='text-2xl font-semibold'>_Orders</p>
              <div className='h-fit w-full flex flex-col'>
                <div className='h-[50px] w-full flex items-center border-b-[1px] border-black border-opacity-5'>                   
                    <p className='w-[10%] opacity-50 capitalize'>id</p>
                    <p className='w-[30%] opacity-50 capitalize'>user</p>
                    <p className='w-[20%] opacity-50 capitalize'>date</p>
                    <p className='w-[20%] opacity-50 capitalize'>Total</p>
                    <p className='w-[10%] opacity-50 capitalize'>Paid</p>
                    <p className='w-[10%] opacity-50 capitalize'>deliverd</p>
                </div>
                {
                  orders.map(item =>(
                    <Link key={item._id} to={`/orders/${item._id}/edit`} className='h-[50px] w-full flex items-center border-b-[1px] border-black border-opacity-5'>                   
                      <p className='w-[10%] opacity-50 capitalize'>{item._id}</p>
                      <p className='w-[30%] opacity-50 capitalize'>{item.user && item.user.name}</p>
                      <p className='w-[20%] opacity-50 capitalize'>{item.createdAt.substring(0, 10)}</p>
                      <p className='w-[20%] opacity-50 capitalize'>${item.totalPrice}</p>
                      <p className='w-[10%] opacity-50 capitalize'>
                      {item.isPaid ? (
                          item.paidAt.substring(0, 10)
                      ) : (
                              <i className='fas fa-check' style={{ color: 'red' }}></i>
                          )}
                      </p>
                      <p className='w-[10%] opacity-50 capitalize'>
                      {item.isDelivered ? (
                          item.deliveredAt.substring(0, 10)
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

export default OrderListScreen