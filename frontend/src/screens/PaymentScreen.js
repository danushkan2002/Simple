import React, { useState } from 'react'
import CheckOutSteps from '../components/CheckOutSteps'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = () => {

  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  const dispatch = useDispatch()
  const history = useNavigate()

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  if (!shippingAddress.address) {
      history('/shipping')
  }

  const submitHandler = (e) => {
      e.preventDefault()
      dispatch(savePaymentMethod(paymentMethod))
      history('/placeorder')
  }
  
  
  return (
    <div>
      <CheckOutSteps step1 step2 step3 />
      <section className='h-fit w-full md:px-[50px] lg:px-[75px] md:py-[50px] flex flex-col gap-[100px]'>
        <div className='h-fit w-full max-w-[1024px] mx-auto flex items-start justify-center gap-[25px] md:gap-[50px]'>
          <form onSubmit={submitHandler} className='h-fit w-full md:w-fit py-[15px] md:py-[50px] px-[15px] md:px-[50px] md:bg-30'>

            {/* title */}
            <div className='h-fit w-full md:w-[350px] pb-[0px] md:pb-[10px]'>
              <Link to={'/'} className='text-2xl font-medium'>_Payment</Link>
            </div>

            {/* input */}
            <div className='h-fit w-full mt-[25px] flex flex-col gap-[0px] pb-[25px]'>

              <div className='h-fit w-full'>
                <div className={
                  paymentMethod === "PayPal" ?
                  'h-[50px] w-full flex items-center gap-[15px] duration-100':
                  'h-[50px] w-full flex items-center gap-[15px] duration-100'
                }>
                  
                  <input type='radio' name='paymentMethod' autoComplete={false} autoSave={false} required={true} 
                  value={'PayPal'} onChange={(e) => setPaymentMethod(e.target.value)} 
                  className='relative z-20 h-[24px] w-[24px] p-[10px] focus:bg-10 focus:text-10 outline-none bg-transparent'></input>
                  <p className={
                    paymentMethod === "PayPal" ?
                    'opacity-50 duration-100 z-0':
                    'opacity-75 duration-100 z-0'
                  }>Pay Pal</p>
                </div>
              </div>

              <div className='h-fit w-full'>
                <div className={
                  paymentMethod === "PayPal" ?
                  'h-[50px] w-full flex items-center gap-[15px] duration-100':
                  'h-[50px] w-full flex items-center gap-[15px] duration-100'
                }>
                  
                  <input type='radio' name='paymentMethod' autoComplete={false} autoSave={false} required={true} 
                  value={'CashOnDelivery'} onChange={(e) => setPaymentMethod(e.target.value)} 
                  className='relative z-20 h-[24px] w-[24px] p-[10px] focus:bg-10 focus:text-10 outline-none bg-transparent'></input>
                  <p className={
                    paymentMethod === "PayPal" ?
                    'opacity-50 duration-100 z-0':
                    'opacity-75 duration-100 z-0'
                  }>Cash on Delivery</p>
                </div>
              </div>

            </div>

            {/* submit */}
            <button type='submit' className='h-[50px] w-full bg-10 capitalize text-white flex items-center justify-center'>
                next
            </button>

          </form>
        </div>
      </section>
    </div>
  )
}

export default PaymentScreen