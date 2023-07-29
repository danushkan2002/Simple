import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import dayjs from "dayjs"
import { useDispatch, useSelector } from 'react-redux'
import { listOrders } from '../actions/orderActions'
import ReactToPrint from 'react-to-print';

const ReportScreen = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const orderList = useSelector(state => state.orderList)
    const { orders , loading, error} = orderList

    const dispatch = useDispatch()
    const history = useNavigate()


    useEffect(() => {

        if (userInfo && userInfo.isAdmin) {
            dispatch(listOrders())
        }
    }, [dispatch, userInfo ])

    useEffect(() => {
        if ((!userInfo) &&(!userInfo.isAdmin)) {
            history('/')
        }
      
    }, [history, userInfo])
    const componentRef = useRef();


  return (
    <div className='bg-white py-[100px]'>

        {
            loading?
            "":
            error?
            '':
            <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col justify-center gap-[25px]'>
                <ReactToPrint
                    trigger={() => <button className='h-fit w-fit py-[10px] px-[15px] bg-orange-500 text-white'>Print this out!</button>}
                    content={() => componentRef.current}
                 
                />
                <div ref={componentRef} className='h-fit w-full max-w-[1024px] mx-auto flex flex-col justify-center gap-[25px] py-[50px]'>
                    
                    <div className='flex items-center justify-center gap-[5px]'>
                        <div className='h-[25px] w-[50px] bg-blue-400'></div>
                        <p className='opacity-25 capitalize'>Sales</p>
                    </div>
                    <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-row items-start gap-[5px] px-[50px]'>
                        <div className='h-[300px] w-fit flex flex-col items-end -mt-[15px]'>
                            <div className='h-[30px] w-fit flex items-center'>100</div>
                            <div className='h-[30px] w-fit flex items-center'>90</div>
                            <div className='h-[30px] w-fit flex items-center'>80</div>
                            <div className='h-[30px] w-fit flex items-center'>70</div>
                            <div className='h-[30px] w-fit flex items-center'>60</div>
                            <div className='h-[30px] w-fit flex items-center'>50</div>
                            <div className='h-[30px] w-fit flex items-center'>40</div>
                            <div className='h-[30px] w-fit flex items-center'>30</div>
                            <div className='h-[30px] w-fit flex items-center'>20</div>
                            <div className='h-[30px] w-fit flex items-center'>10</div>
                        </div>
                        <div className='h-fit w-full flex flex-col relative'>
                                <div className='h-[300px] w-full flex items-end  border-b-[1px] border-black'>
                                    <div style={{
                                        height : (((orders.filter(item => dayjs(item.createdAt).format('MM') == 1).map(i => i).length))/orders.map(i=> i).length)*300
                                    }} className='w-[10%] max-w-[75px] flex justify-center'>
                                        <div className='h-full w-[50px] bg-blue-400'>

                                        </div>
                                    </div>
                                    <div style={{
                                        height : (((orders.filter(item => dayjs(item.createdAt).format('MM') == 2).map(i => i).length))/orders.map(i=> i).length)*300
                                    }} className='w-[10%] max-w-[75px] flex justify-center'>
                                        <div className='h-full w-[50px] bg-blue-400'>

                                        </div>
                                    </div>
                                    <div style={{
                                        height : (((orders.filter(item => dayjs(item.createdAt).format('MM') == 3).map(i => i).length))/orders.map(i=> i).length)*300
                                    }} className='w-[10%] max-w-[75px] flex justify-center'>
                                        <div className='h-full w-[50px] bg-blue-400'>

                                        </div>
                                    </div>
                                    <div style={{
                                        height : (((orders.filter(item => dayjs(item.createdAt).format('MM') == 4).map(i => i).length))/orders.map(i=> i).length)*300
                                    }} className='w-[10%] max-w-[75px] flex justify-center'>
                                        <div className='h-full w-[50px] bg-blue-400'>

                                        </div>
                                    </div>
                                    <div style={{
                                        height : (((orders.filter(item => dayjs(item.createdAt).format('MM') == 5).map(i => i).length))/orders.map(i=> i).length)*300
                                    }} className='w-[10%] max-w-[75px] flex justify-center'>
                                        <div className='h-full w-[50px] bg-blue-400'>

                                        </div>
                                    </div>
                                    <div style={{
                                        height : (((orders.filter(item => dayjs(item.createdAt).format('MM') == 6).map(i => i).length))/orders.map(i=> i).length)*300
                                    }} className='w-[10%] max-w-[75px] flex justify-center'>
                                        <div className='h-full w-[50px] bg-blue-400'>

                                        </div>
                                    </div>
                                    <div style={{
                                        height : (((orders.filter(item => dayjs(item.createdAt).format('MM') == 7).map(i => i).length))/orders.map(i=> i).length)*300
                                    }} className='w-[10%] max-w-[75px] flex justify-center'>
                                        <div className='h-full w-[50px] bg-blue-400'>

                                        </div>
                                    </div>
                                    <div style={{
                                        height : (((orders.filter(item => dayjs(item.createdAt).format('MM') == 8).map(i => i).length))/orders.map(i=> i).length)*300
                                    }} className='w-[10%] max-w-[75px] flex justify-center'>
                                        <div className='h-full w-[50px] bg-blue-400'>

                                        </div>
                                    </div>
                                    <div style={{
                                        height : (((orders.filter(item => dayjs(item.createdAt).format('MM') == 9).map(i => i).length))/orders.map(i=> i).length)*300
                                    }} className='w-[10%] max-w-[75px] flex justify-center'>
                                        <div className='h-full w-[50px] bg-blue-400'>

                                        </div>
                                    </div>
                                    <div style={{
                                        height : (((orders.filter(item => dayjs(item.createdAt).format('MM') == 10).map(i => i).length))/orders.map(i=> i).length)*300
                                    }} className='w-[10%] max-w-[75px] flex justify-center'>
                                        <div className='h-full w-[50px] bg-blue-400'>

                                        </div>
                                    </div>
                                    <div style={{
                                        height : (((orders.filter(item => dayjs(item.createdAt).format('MM') == 11).map(i => i).length))/orders.map(i=> i).length)*300
                                    }} className='w-[10%] max-w-[75px] flex justify-center'>
                                        <div className='h-full w-[50px] bg-blue-400'>

                                        </div>
                                    </div>
                                    <div style={{
                                        height : (((orders.filter(item => dayjs(item.createdAt).format('MM') == 12).map(i => i).length))/orders.map(i=> i).length)*300
                                    }} className='w-[10%] max-w-[75px] flex justify-center'>
                                        <div className='h-full w-[50px] bg-blue-400'>

                                        </div>
                                    </div>
                                </div>
                                <div className='h-fit w-full flex items-end '>
                                    <div className='w-[10%] max-w-[75px] flex justify-center opacity-50'>
                                        Jan
                                    </div>
                                    <div className='w-[10%] max-w-[75px] flex justify-center opacity-50'>
                                        Feb
                                    </div>
                                    <div className='w-[10%] max-w-[75px] flex justify-center opacity-50'>
                                        Mar
                                    </div>
                                    <div className='w-[10%] max-w-[75px] flex justify-center opacity-50'>
                                        April
                                    </div>
                                    <div className='w-[10%] max-w-[75px] flex justify-center opacity-50'>
                                        May
                                    </div>
                                    <div className='w-[10%] max-w-[75px] flex justify-center opacity-50'>
                                        June
                                    </div>
                                    <div className='w-[10%] max-w-[75px] flex justify-center opacity-50'>
                                        July
                                    </div>
                                    <div className='w-[10%] max-w-[75px] flex justify-center opacity-50'>
                                        Aug
                                    </div>
                                    <div className='w-[10%] max-w-[75px] flex justify-center opacity-50'>
                                        Sep
                                    </div>
                                    <div className='w-[10%] max-w-[75px] flex justify-center opacity-50'>
                                        Oct
                                    </div>
                                    <div className='w-[10%] max-w-[75px] flex justify-center opacity-50'>
                                        Nov
                                    </div>
                                    <div className='w-[10%] max-w-[75px] flex justify-center opacity-50'>
                                        Dec
                                    </div>
                                </div>
                                <div className='h-[300px] w-full absolute border-l-[1px] border-black'>
                                    <div className='h-[30px] w-full border-t-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-[30px] w-full border-t-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-[30px] w-full border-t-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-[30px] w-full border-t-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-[30px] w-full border-t-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-[30px] w-full border-t-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-[30px] w-full border-t-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-[30px] w-full border-t-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-[30px] w-full border-t-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-[30px] w-full border-t-[1px] border-black border-opacity-5'>

                                    </div>
                                </div>
                                <div className='h-[300px] w-full absolute border-l-[1px] border-black flex'>
                                    <div className='h-full w-[10%] max-w-[75px] border-r-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-full w-[10%] max-w-[75px] border-r-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-full w-[10%] max-w-[75px] border-r-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-full w-[10%] max-w-[75px] border-r-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-full w-[10%] max-w-[75px] border-r-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-full w-[10%] max-w-[75px] border-r-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-full w-[10%] max-w-[75px] border-r-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-full w-[10%] max-w-[75px] border-r-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-full w-[10%] max-w-[75px] border-r-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-full w-[10%] max-w-[75px] border-r-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-full w-[10%] max-w-[75px] border-r-[1px] border-black border-opacity-5'>

                                    </div>
                                    <div className='h-full w-[10%] max-w-[75px] border-r-[1px] border-black border-opacity-5'>

                                    </div>
                                </div>
                        </div>
                    </div>
                    {/* <div>
                        <PieChart
                        widthAndHeight={}
                        series={[]}
                        sliceColor={[]}
                        coverRadius={0.45}
                        coverFill={'#FFF'}
                    />
                    </div> */}
                </div>
            </div>
        }
    </div>
  )
}

export default ReportScreen