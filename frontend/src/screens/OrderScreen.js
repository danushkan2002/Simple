import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetails, payOrder, deliverOrder } from '../actions/orderActions'
import { ORDER_PAY_RESET, ORDER_DELIVER_RESET } from '../constants/orderConstants'

const OrderScreen = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const history = useNavigate()
    const [sdkReady, setSdkReady] = useState(false)

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading } = orderDetails

    const orderPay = useSelector(state => state.orderPay)
    const { loading: loadingPay, success: successPay } = orderPay

    const orderDeliver = useSelector(state => state.orderDeliver)
    const { loading: loadingDeliver, success: successDeliver } = orderDeliver

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    if (!loading && !error) {
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    }


    const addPayPalScript = () => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://www.paypal.com/sdk/js?client-id=AeDXja18CkwFUkL-HQPySbzZsiTrN52cG13mf9Yz7KiV2vNnGfTDP0wDEN9sGlhZHrbb_USawcJzVDgn'
        script.async = true
        script.onload = () => {
            setSdkReady(true)
        }
        document.body.appendChild(script)
    }

    useEffect(() => {

        if (!userInfo) {
            history('/login')
        }

        if (!order || successPay || order._id !== Number(id) || successDeliver) {
            dispatch({ type: ORDER_PAY_RESET })
            dispatch({ type: ORDER_DELIVER_RESET })
            dispatch(getOrderDetails(id))
        } 
    }, [dispatch, order, id, successPay, successDeliver])


    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(id, paymentResult))
    }

    const deliverHandler = () => {
        dispatch(deliverOrder(order))
    }

  return (
    <div>
      {
        loading?
        <p>loadin</p> :
        error ?
        <p>error</p> :
        <section className='h-fit w-full md:px-[50px] lg:px-[75px] md:py-[50px] flex flex-col gap-[100px]'>
          <div className='h-fit w-full max-w-[1024px] mx-auto flex items-start justify-center gap-[25px] md:gap-[50px]'>
            <div className='h-fit w-full flex flex-col gap-[50px]'>

              {/* shiping */}
              <div className='h-fit w-full pb-[25px] flex flex-col gap-[15px] border-b-[1px] border-black border-opacity-5'>
                <p className='text-2xl font-semibold'>_Shipping</p>
                <p className='font-medium opacity-50'>
                <strong>Name: </strong> {order.user.name}
                <p><strong>Email: </strong><a href={`mailto:${order.user.email}`}>{order.user.email}</a></p>
                                    <p>
                                        <strong>Shipping: </strong>
                                        {order.shippingAddress.address},  {order.shippingAddress.city}
                                        {'  '}
                                        {order.shippingAddress.postalCode},
                                {'  '}
                                        {order.shippingAddress.country}
                                    </p>
                </p>
              </div>

              {/* payment */}
              <div className='h-fit w-full pb-[25px] flex flex-col gap-[15px] border-b-[1px] border-black border-opacity-5'>
                <p className='text-2xl font-semibold'>_Payment</p>
                <p className='font-medium opacity-50'><strong>Method: </strong>
                                        {order.paymentMethod}</p>
              </div>

              {/* order items */}
              <div className='h-fit w-full pb-[25px] flex flex-col gap-[15px] border-b-[1px] border-black border-opacity-5'>
                <p className='text-2xl font-semibold'>_Order Items</p>
                
                {/* items */}
                <div className='h-fit flex flex-col gap-[10px]'>

                  {/* item  */}
                  {
                    order.orderItems.map((item, index) => (
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
                    <p className='uppercase font-medium opacity-100'>LKR {order.itemsPrice}</p>
                  </div>
                  <div className='h-fit w-full flex items-center justify-between'>
                    <p className='capitalize font-medium opacity-50'>Shipping</p>
                    <p className='uppercase font-medium opacity-100'>LKR {order.shippingPrice}</p>
                  </div>
                  <div className='h-fit w-full flex items-center justify-between'>
                    <p className='capitalize font-medium opacity-50'>Tax</p>
                    <p className='uppercase font-medium opacity-100'>LKR {order.taxPrice}</p>
                  </div>
                  <div className='h-fit w-full flex items-center justify-between'>
                    <p className='capitalize font-medium opacity-50'>Total</p>
                    <p className='uppercase font-medium opacity-100'>LKR {order.totalPrice}</p>
                  </div>
                </div>
                <button disabled={order.orderItems === 0} type='button' className='h-[50px] w-full border-[1px] border-10 bg-10 md:bg-transparent text-white md:text-10 capitalize flex items-center justify-center'>
                  checkout
                </button>
              </div>
            </div>

          </div>
        </section>
      }
    </div>
  )
}

export default OrderScreen