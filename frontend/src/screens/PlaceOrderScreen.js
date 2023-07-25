import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'
import CheckOutSteps from '../components/CheckOutSteps'

const PlaceOrderScreen = () => {
    
    const orderCreate = useSelector(state => state.orderCreate)
    const { order, error, success } = orderCreate

    const dispatch = useDispatch()
    const history = useNavigate()

    const cart = useSelector(state => state.cart)

    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 10).toFixed(2)
    cart.taxPrice = Number((0.082) * cart.itemsPrice).toFixed(2)

    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)


    if (!cart.paymentMethod) {
        history('/payment/')
    }

    useEffect(() => {
        if (success){
            history(`/order/${order._id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [success, history, dispatch, order])

    const placeOrder = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice,
        }))
    }
  return (
    <div>
      <CheckOutSteps step1 step2 step3 step4/>
      <section className='h-fit w-full md:px-[50px] lg:px-[75px] md:py-[50px] flex flex-col gap-[100px]'>
        <div className='h-fit w-full max-w-[1024px] mx-auto flex items-start justify-center gap-[25px] md:gap-[50px]'>
          <div className='h-fit w-full flex flex-col gap-[50px]'>

            {/* shiping */}
            <div className='h-fit w-full pb-[25px] flex flex-col gap-[15px] border-b-[1px] border-black border-opacity-5'>
              <p className='text-2xl font-semibold'>_Shipping</p>
              <p className='font-medium opacity-50'>
                {cart.shippingAddress.address},  {cart.shippingAddress.city}
                {'  '}
                {cart.shippingAddress.postalCode},
                {'  '}
                {cart.shippingAddress.country}
              </p>
            </div>

            {/* payment */}
            <div className='h-fit w-full pb-[25px] flex flex-col gap-[15px] border-b-[1px] border-black border-opacity-5'>
              <p className='text-2xl font-semibold'>_Payment</p>
              <p className='font-medium opacity-50'>{cart.paymentMethod}</p>
            </div>

            {/* order items */}
            <div className='h-fit w-full pb-[25px] flex flex-col gap-[15px] border-b-[1px] border-black border-opacity-5'>
              <p className='text-2xl font-semibold'>_Order Items</p>
              
              {/* items */}
              <div className='h-fit flex flex-col gap-[10px]'>

                {/* item  */}
                {
                  cart.cartItems.map((item, index) => (
                    <div className='h-fit w-full flex items-center justify-between'>
                      <div className='h-fit w-fit flex items-center gap-[15px]'>
                        <div className='h-[50px] w-[50px] bg-30'>
                          <img src={item.image}  className='h-full w-full object-cover scale-75'/>
                        </div>
                      
                        <div className='h-fit w-fit flex flex-col'>
                          <p className='text-sm opacity-75'>Amazon Echo doc 3rd generation</p>
                          
                          {/* verients */}
                          <div className='flex'>
                            {/* verient */}
                            <div className='flex text-sm'>
                              <p className='capitalize opacity-25'>size </p>  <p className='uppercase opacity-50'>xl</p>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className=''>
                        <p className='opacity-75 uppercase'>{item.qty} X ${item.price} = LKR {(item.qty * item.price).toFixed(2)}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          {/* summery */}
          <div className='h-fit w-[250px] lg:w-[300px] bg-30'>
            <div className='h-fit w-[250px] lg:w-[300px] py-[50px] px-[25px] '>
              <div className='hidden md:block h-[50px] w-full border-b-[1px] border-black border-opacity-5'>
                <p className='text-2xl font-semibold capitalize'>_order summery</p>
              </div>
              <div className='h-fit w-full flex flex-col gap-[5px] py-[25px]'>
                <div className='h-fit w-full flex items-center justify-between'>
                  <p className='capitalize font-medium opacity-50'>items</p>
                  <p className='uppercase font-medium opacity-100'>LKR {cart.itemsPrice}</p>
                </div>
                <div className='h-fit w-full flex items-center justify-between'>
                  <p className='capitalize font-medium opacity-50'>Shipping</p>
                  <p className='uppercase font-medium opacity-100'>LKR {cart.shippingPrice}</p>
                </div>
                <div className='h-fit w-full flex items-center justify-between'>
                  <p className='capitalize font-medium opacity-50'>Tax</p>
                  <p className='uppercase font-medium opacity-100'>LKR {cart.taxPrice}</p>
                </div>
                <div className='h-fit w-full flex items-center justify-between'>
                  <p className='capitalize font-medium opacity-50'>Total</p>
                  <p className='uppercase font-medium opacity-100'>LKR {cart.totalPrice}</p>
                </div>
              </div>
              <button onClick={placeOrder} disabled={cart.cartItems === 0} type='button' className='h-[50px] w-full border-[1px] border-10 bg-10 md:bg-transparent text-white md:text-10 capitalize flex items-center justify-center'>
                checkout
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default PlaceOrderScreen