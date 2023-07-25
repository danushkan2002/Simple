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

      {/* hero */}
      <section className='h-[500px] w-full bg-30'>

      </section>

      <section className='h-fit w-full py-[50px] lg:py-[100px] px-[15px] sm:px-[25px] md:px-[50px] flex flex-col gap-[50px] lg:gap-[100px]'>

        {/* category */}
        <div className='h-full w-full max-w-[1024px] mx-auto'>
          <div className='h-[50px] lg:h-[100px] w-full flex items-center justify-between'>
            
            <div className='flex items-center'>
              <p className='font-semibold text-2xl'>_Men</p>
            </div>
            
            <div className='flex items-center opacity-50 gap-[10px]'>
              <p className='text-sm'>View All</p>
              <HiMiniArrowLongRight className='text-xl'/>
            </div>

          </div>
          <div className='h-fit w-full flex flex-col md:flex-row gap-[25px]'>
            <div className='h-[325px] lg:h-[400px] w-full md:w-1/2 bg-30'>

            </div>
            <div className='h-[325px] lg:h-[400px] w-full md:w-1/2 flex gap-[50px] relative'>
              <div className='h-[50px] w-[50px] absolute top-1/2 transform -translate-y-1/2 bg-gray-200 '></div>

              <div className='h-full w-1/2 ml-0 md:ml-[25px]'>
                <div className='h-[250px] lg:h-[300px] w-full bg-30'></div>
                <div className='h-[75px] lg:h-[100px] w-full flex flex-col gap-[10px] items-center justify-end text-center'>
                  <p className='text-sm  text-10'>
                    New product
                  </p>
                  <p className='text-xl font-semibold'>LKR 1999.00</p>
                </div>
              </div>
              <div className='h-full w-1/2 mr-0 md:mr-[25px]'>
                <div className='h-[250px] lg:h-[300px] w-full bg-30'></div>
              </div>
              
              <div className='h-[50px] w-[50px] absolute top-1/2 transform right-0 -translate-y-1/2 bg-gray-200 '></div>
            </div>
          </div>
        </div>

        {/* promotion */}
        <div className='h-[250px] w-full max-w-[1024px] mx-auto bg-30 px-[25px] md:px-[50px] lg:px-[100px] flex items-center'>
          <div className=' flex flex-col gap-[15px]'>
            <p className='text-4xl font-medium capitalize'>Promotion</p>
            <div className='h-[5px] w-[25px] bg-30'></div>
            <p className='capitalize opacity-75'>fashion and Accessories</p>
          </div>
        </div>

        {/* category */}
        <div className='h-full w-full max-w-[1024px] mx-auto'>
          <div className='h-[50px] lg:h-[100px] w-full flex items-center justify-between'>
            
            <div className='flex items-center'>
              <p className='font-semibold text-2xl'>_Men</p>
            </div>
            
            <div className='flex items-center opacity-50 gap-[10px]'>
              <p className='text-sm'>View All</p>
              <HiMiniArrowLongRight className='text-xl'/>
            </div>

          </div>
          <div className='h-fit w-full flex flex-col md:flex-row gap-[25px]'>
            <div className='h-[325px] lg:h-[400px] w-full md:w-1/2 flex gap-[50px] relative'>
              <div className='h-[50px] w-[50px] absolute top-1/2 transform -translate-y-1/2 bg-gray-200 '></div>

              <div className='h-full w-1/2 ml-0 md:ml-[25px]'>
                <div className='h-[250px] lg:h-[300px] w-full bg-30'></div>
                <div className='h-[75px] lg:h-[100px] w-full flex flex-col gap-[10px] items-center justify-end text-center'>
                  <p className='text-sm  text-10'>
                    New product
                  </p>
                  <p className='text-xl font-semibold'>LKR 1999.00</p>
                </div>
              </div>
              <div className='h-full w-1/2 mr-0 md:mr-[25px]'>
                <div className='h-[250px] lg:h-[300px] w-full bg-30'></div>
              </div>
              
              <div className='h-[50px] w-[50px] absolute top-1/2 transform right-0 -translate-y-1/2 bg-gray-200 '></div>
            </div>
            <div className='h-[325px] lg:h-[400px] w-full md:w-1/2 bg-30'>

            </div>
          </div>
        </div>

      </section>

      <section className='h-fit w-full py-[50px] lg:py-[100px] px-[15px] sm:px-[25px] md:px-[50px]'>
        <div className='h-full w-full max-w-[1024px] mx-auto flex flex-col gap-[25px]'>
          <div className='h-full w-full flex items-center justify-between'>
            
            <div className='flex items-center'>
              <p className='font-semibold text-2xl'>_Men</p>
            </div>
            
            <div className='flex items-center opacity-50 gap-[10px]'>
              <p className='text-sm'>View All</p>
              <HiMiniArrowLongRight className='text-xl'/>
            </div>

          </div>
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
            <p>error</p> :
            <div className='h-fit md:h-[300px] grid grid-cols-2 md:grid-cols-4 lg:overflow-hidden gap-y-[25px] gap-[5px] md:gap-[25px] lg:gap-[50px] justify-between'>
              
              {
   
                products.map(item => (
                  <Link to={`/product/${item._id}/`} key={item._id} className='h-fit max-h-[300px] w-full md:max-w-[200px]'>
                    <div className='h-[225px] bg-30'>
                        <img src={item.image} className='h-full w-fit object-cover scale-[65%]'/>
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