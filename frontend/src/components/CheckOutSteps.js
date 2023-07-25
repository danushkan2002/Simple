import React from 'react'

const CheckOutSteps = ({step1, step2, step3, step4}) => {
  return (
    <div className='h-[75px] md:h-[100px] w-full flex items-center justify-between md:justify-center md:gap-[100px] px-[15px]'>
        <div className=''>
            {
                step1?
                <div className='h-[24px] w-[24px] bg-10'>

                </div> :
                <div className='h-[24px] w-[24px] bg-30'>

                </div>
            }
        </div>
        <div className=''>
            {
                step2?
                <div className='h-[24px] w-[24px] bg-10'>

                </div> :
                <div className='h-[24px] w-[24px] bg-30'>

                </div>
            }
        </div>
        <div className=''>
            {
                step3?
                <div className='h-[24px] w-[24px] bg-10'>

                </div> :
                <div className='h-[24px] w-[24px] bg-30'>

                </div>
            }
        </div>
        <div className=''>
            {
                step4?
                <div className='h-[24px] w-[24px] bg-10'>

                </div> :
                <div className='h-[24px] w-[24px] bg-30'>

                </div>
            }
        </div>
    </div>
  )
}

export default CheckOutSteps