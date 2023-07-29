import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import dayjs from "dayjs"
import { useDispatch, useSelector } from 'react-redux'
import { listOrders } from '../actions/orderActions'

const DashboardScreen = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const orderList = useSelector(state => state.orderList)
    const { orders } = orderList

    const dispatch = useDispatch()
    const history = useNavigate()


    useEffect(() => {

        if (userInfo && userInfo.isAdmin) {
            dispatch(listOrders())
        }
    }, [dispatch, userInfo ])

    useEffect(() => {
        if ((!userInfo) || (!userInfo.isAdmin)) {
            history('/')
        }
    }, [history, userInfo])


  return (
    <div className=''>
        <section className='h-fit w-full md:px-[50px] lg:px-[75px] md:py-[50px] flex flex-col gap-[100px]'>
            <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col md:flex-row items-start gap-[25px] md:gap-[50px]'>
                <Link to={'/admin/userlist'} className='h-[200px] w-[250px] border-[1px] flex items-center justify-center'>
                    <p className='text-2xl font-semibold capitalize'>Users</p>
                </Link>
                <Link to={'/admin/productlist'} className='h-[200px] w-[250px] border-[1px] flex items-center justify-center'>
                    <p className='text-2xl font-semibold capitalize'>products</p>
                </Link>
                <Link to={'/admin/orderlist'} className='h-[200px] w-[250px] border-[1px] flex items-center justify-center'>
                    <p className='text-2xl font-semibold capitalize'>Orders</p>
                </Link>
            </div>
        </section>
      
    </div>
  )
}

export default DashboardScreen