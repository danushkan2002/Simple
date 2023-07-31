import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiMiniArrowLongRight, HiOutlineArrowLongRight } from 'react-icons/hi2'
import { MdOutlineStarHalf, MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md"
import { listProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'

const HomeScreen = () => {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products, page, pages } = productList


  useEffect(() => {
      dispatch(listProducts())
      
  }, [dispatch])

  return (
    <div className='h-fit w-full'>

      <section className='h-fit w-full py-[50px] px-[15px] sm:px-[25px] md:px-[50px]'>
        <div className='h-full w-full max-w-[1024px] mx-auto flex flex-col gap-[25px]'>
          
          {
            loading ?
            <div className='h-fit md:h-[300px] grid grid-cols-2 md:grid-cols-4 lg:overflow-hidden gap-y-[25px] gap-[5px] md:gap-[25px] lg:gap-[50px] justify-between'>
              
              <div className='h-fit max-h-[300px] w-full md:max-w-[200px]'>
                <div className='h-[225px] bg-30'>

                </div>
                <div className='h-fit w-full flex flex-col mt-[10px]'>
                  <p className='text-sm capitalize'>product name</p>
                  <div className='flex items-center gap-[5px]'>
                    <p className='text-lg font-semibold uppercase'>LKR 299.00</p>
                    <div className='flex items-center text-sm'>
                      <MdOutlineStarPurple500/>
                      <MdOutlineStarPurple500/>
                      <MdOutlineStarHalf/>
                      <MdOutlineStarOutline/>
                      <MdOutlineStarOutline/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='h-fit max-h-[300px] w-full md:max-w-[200px]'>
                <div className='h-[225px] bg-30'>

                </div>
                <div className='h-fit w-full flex flex-col mt-[10px]'>
                  <p className='text-sm capitalize'>product name</p>
                  <div className='flex items-center gap-[5px]'>
                    <p className='text-lg font-semibold uppercase'>LKR 299.00</p>
                    <div className='flex items-center text-sm'>
                      <MdOutlineStarPurple500/>
                      <MdOutlineStarPurple500/>
                      <MdOutlineStarHalf/>
                      <MdOutlineStarOutline/>
                      <MdOutlineStarOutline/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='h-fit max-h-[300px] w-full md:max-w-[200px]'>
                <div className='h-[225px] bg-30'>

                </div>
                <div className='h-fit w-full flex flex-col mt-[10px]'>
                  <p className='text-sm capitalize'>product name</p>
                  <div className='flex items-center gap-[5px]'>
                    <p className='text-lg font-semibold uppercase'>LKR 299.00</p>
                    <div className='flex items-center text-sm'>
                      <MdOutlineStarPurple500/>
                      <MdOutlineStarPurple500/>
                      <MdOutlineStarHalf/>
                      <MdOutlineStarOutline/>
                      <MdOutlineStarOutline/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='h-fit max-h-[300px] w-full md:max-w-[200px]'>
                <div className='h-[225px] bg-30'>

                </div>
                <div className='h-fit w-full flex flex-col mt-[10px]'>
                  <p className='text-sm capitalize'>product name</p>
                  <div className='flex items-center gap-[5px]'>
                    <p className='text-lg font-semibold uppercase'>LKR 299.00</p>
                    <div className='flex items-center text-sm'>
                      <MdOutlineStarPurple500/>
                      <MdOutlineStarPurple500/>
                      <MdOutlineStarHalf/>
                      <MdOutlineStarOutline/>
                      <MdOutlineStarOutline/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='h-fit max-h-[300px] w-full md:max-w-[200px]'>
                <div className='h-[225px] bg-30'>

                </div>
                <div className='h-fit w-full flex flex-col mt-[10px]'>
                  <p className='text-sm capitalize'>product name</p>
                  <div className='flex items-center gap-[5px]'>
                    <p className='text-lg font-semibold uppercase'>LKR 299.00</p>
                    <div className='flex items-center text-sm'>
                      <MdOutlineStarPurple500/>
                      <MdOutlineStarPurple500/>
                      <MdOutlineStarHalf/>
                      <MdOutlineStarOutline/>
                      <MdOutlineStarOutline/>
                    </div>
                  </div>
                </div>
              </div>

            </div>:
            error ?
            <p className=''>Somthing went wrong</p> :
            <div className='h-fit grid grid-cols-2 md:grid-cols-4  gap-y-[25px] gap-[5px] md:gap-[25px] lg:gap-[50px] justify-between'>
              
              {
   
                products.map(item => (
                  <Link to={`/product/${item._id}/`} key={item._id} className='h-fit max-h-[300px] w-full md:max-w-[200px]'>
                    <div className='h-[225px] border-[1px]'>
                        <img src={item.image} className='h-full w-fit object-contain '/>
                    </div>
                    <div className='h-fit w-full flex flex-col mt-[10px]'>
                      <p className='text-sm capitalize'>{item.name}</p>
                      <div className='flex flex-wrap items-center gap-[5px]'>
                        <p className='text-lg font-semibold uppercase'>LKR {item.price}</p>
                        <div className='flex items-center text-sm'>
                          <MdOutlineStarPurple500/>
                          <MdOutlineStarPurple500/>
                          <MdOutlineStarHalf/>
                          <MdOutlineStarOutline/>
                          <MdOutlineStarOutline/>
                        </div>
                      </div>
                    </div>
                  </Link> 
                ))
              }

            </div>
          }
        </div>
      </section>

    </div>
  )
}

export default HomeScreen