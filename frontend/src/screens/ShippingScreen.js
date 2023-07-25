import React, { useEffect, useState } from 'react'
import CheckOutSteps from '../components/CheckOutSteps'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = () => {
  
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()


    const [address, setAddress] = useState(shippingAddress ? shippingAddress.address:'')
    const [city, setCity] = useState(shippingAddress ? shippingAddress.city:'')
    const [postalCode, setPostalCode] = useState(shippingAddress ? shippingAddress.postalCode:'')
    const [country, setCountry] = useState(shippingAddress ? shippingAddress.country:'')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history('/payment')
    }
       

  return (
    <div>
      <CheckOutSteps step1 step2 />
      <section className='h-fit w-full md:px-[50px] lg:px-[75px] md:py-[50px] flex flex-col gap-[100px]'>
        <div className='h-fit w-full max-w-[1024px] mx-auto flex items-start justify-start gap-[25px] md:gap-[50px]'>
          <form onSubmit={submitHandler} className='h-fit w-full md:w-fit py-[15px] md:py-[50px] px-[15px] md:px-[50px] md:bg-30'>

            {/* title */}
            <div className='h-fit w-full md:w-[350px] pb-[0px] md:pb-[10px]'>
              <Link to={'/'} className='text-3xl font-medium text-10'>Simple.</Link>
            </div>

            {/* input */}
            <div className='h-fit w-full mt-[25px] flex flex-col gap-[5px]'>

              <div className='h-[50px] w-full'>
                <div className={
                  address === "" ?
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-5 duration-100':
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-10 duration-100'
                }>
                  <p className={
                    address === "" ?
                    'opacity-25 absolute top-1/2 transform -translate-y-1/2 duration-100 z-0':
                    'text-xs opacity-50 absolute top-0 transform -translate-y-1/2 duration-100 z-0'
                  }>address Address</p>
                  <input autoComplete={false} autoSave={false} required={true} value={address ? address : ''} onChange={(e) => setAddress(e.target.value)} className='relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
                </div>
              </div>

              <div className='h-[50px] w-full'>
                <div className={
                  city === "" ?
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-5 duration-100':
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-10 duration-100'
                }>
                  <p className={
                    city === "" ?
                    'opacity-25 absolute top-1/2 transform -translate-y-1/2 duration-100 z-0':
                    'text-xs opacity-50 absolute top-0 transform -translate-y-1/2 duration-100 z-0'
                  }>city</p>
                  <input type='city' autoComplete={false} autoSave={false} required={true} value={city ? city : ''} onChange={(e) => setCity(e.target.value)} className='relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
                </div>
              </div>

              <div className='h-[50px] w-full'>
                <div className={
                  postalCode === "" ?
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-5 duration-100':
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-10 duration-100'
                }>
                  <p className={
                    postalCode === "" ?
                    'opacity-25 absolute top-1/2 transform -translate-y-1/2 duration-100 z-0':
                    'text-xs opacity-50 absolute top-0 transform -translate-y-1/2 duration-100 z-0'
                  }>postalCode Address</p>
                  <input autoComplete={false} autoSave={false} required={true} value={postalCode ? postalCode : ''} onChange={(e) => setPostalCode(e.target.value)} className='relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
                </div>
              </div>

              <div className='h-[50px] w-full'>
                <div className={
                  country === "" ?
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-5 duration-100':
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-10 duration-100'
                }>
                  <p className={
                    country === "" ?
                    'opacity-25 absolute top-1/2 transform -translate-y-1/2 duration-100 z-0':
                    'text-xs opacity-50 absolute top-0 transform -translate-y-1/2 duration-100 z-0'
                  }>country</p>
                  <input type='country' autoComplete={false} autoSave={false} required={true} value={country ? country : ''} onChange={(e) => setCountry(e.target.value)} className='relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
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

export default ShippingScreen