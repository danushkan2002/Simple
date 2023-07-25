import React, {useState} from 'react'
import { MdOutlineStarHalf, MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md"
import { BiPlus, BiMinus, BiSearch } from 'react-icons/bi'
import { VscSettings } from 'react-icons/vsc'

const SearchScreen = () => {
  const [filterEdit, setFilterEdit] = useState(false)

  return (
    <div className={
      filterEdit ?
      'h-fit w-full bg-30':
      'h-fit w-full'
    }>
        <section className='h-full w-full md:px-[50px] lg:px-[75px]'>
          <div className='h-full w-full max-w-[1024px] mx-auto md:flex'>
            
            <button onClick={() => setFilterEdit(!filterEdit)} className='h-[75px] w-full flex items-center justify-end px-[15px] md:hidden'>
              <VscSettings className='text-2xl'/>
            </button>
            
            <div className={
              filterEdit ?
              'h-full md:h-fit w-full md:w-fit md:min-w-[300px] py-[50px] flex flex-col gap-[25px] fixed bottom-0 top-[75px] md:relative bg-white md:bg-transparent px-[15px] rounded-t-[25px] duration-500':
              'h-full md:h-fit w-full md:w-fit md:min-w-[300px] py-[50px] flex flex-col gap-[25px] fixed bottom-0 top-[100%] md:relative bg-white md:bg-transparent px-[15px] rounded-t-[25px] duration-500'
            }>

              <div className='h-fit w-full'>
                <div className='h-fit w-full'>
                  <p className='font-medium uppercase'>categories</p>
                  <div className='h-[5px] w-[25px] bg-30 mt-[5px]'></div>
                </div>
                <div className='h-fit w-full '>
                  <div className='h-[50px] w-full flex items-center justify-between border-b-[1px] border-black border-opacity-10'>
                    <p className='text-sm font-normal uppercase opacity-75'>FURNITURE</p>
                    <BiPlus/>
                    {/* <BiMinus/> */}
                  </div>
                  <div className='h-fit w-full flex flex-col items-center '>

                    <div className='h-[40px] w-full flex items-center '>
                      <div className='text-sm capitalize opacity-50'>Table</div>
                    </div>
                    <div className='h-[40px] w-full flex items-center '>
                      <div className='text-sm capitalize opacity-50'>Chair</div>
                    </div>
    
                  </div>
                </div>
              </div>
              
              <div className='h-fit w-full'>
                <div className='h-fit w-full'>
                  <p className='font-medium uppercase'>shop by</p>
                  <div className='h-[5px] w-[25px] bg-30 mt-[5px]'></div>
                </div>
                <div className='h-fit w-full '>
                  <div className='h-[50px] w-full flex items-center justify-between border-b-[1px] border-black border-opacity-10'>
                    <p className='text-sm font-normal uppercase opacity-75'>manufacture</p>
                    <BiPlus/>
                    {/* <BiMinus/> */}
                  </div>
                  <div className='h-fit w-full flex flex-col items-center '>
                    
                    <div className='h-[40px] w-full flex items-center '>
                      <div className='text-sm capitalize opacity-50'>Nike</div>
                    </div>
                    <div className='h-[40px] w-full flex items-center '>
                      <div className='text-sm capitalize opacity-50'>Addidas</div>
                    </div>
    
                  </div>
                </div>
              </div>

            </div>

            

            <div className='h-fit w-full md:w-auto md:py-[50px] grid grid-cols-2 md:flex flex-wrap gap-[5px] gap-y-[25px] justify-between px-[15px] md:pl-[25px]'>

              <div className='h-fit max-h-[300px] w-full md:max-w-[200px]'>
                <div className='h-[225px] bg-30'>

                </div>
                <div className='h-fit w-full flex flex-col mt-[10px]'>
                  <p className='text-sm capitalize'>product name</p>
                  <div className='flex items-center gap-[5px]'>
                    <p className='text-base md:text-lg font-semibold uppercase'>LKR 299.00</p>
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
                    <p className='text-base md:text-lg font-semibold uppercase'>LKR 299.00</p>
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
                    <p className='text-base md:text-lg font-semibold uppercase'>LKR 299.00</p>
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
                    <p className='text-base md:text-lg font-semibold uppercase'>LKR 299.00</p>
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
                    <p className='text-base md:text-lg font-semibold uppercase'>LKR 299.00</p>
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
                    <p className='text-base md:text-lg font-semibold uppercase'>LKR 299.00</p>
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

            </div>

          </div>
        </section>
    </div>
  )
}

export default SearchScreen