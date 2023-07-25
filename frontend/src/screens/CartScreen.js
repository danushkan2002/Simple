import React, {useEffect} from 'react'
import { MdCancel } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { BiMinus, BiPlus } from 'react-icons/bi'


const CartScreen = () => {
  const {id} = useParams()
  
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useNavigate()
  
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  useEffect(() => {
      if (id) {
          dispatch(addToCart(id, qty))
      }
  }, [dispatch, id, qty])


  const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
      history('/login?redirect=shipping')
  }
  return (
    <div className='h-fit w-full'>
      <section className='h-fit w-full md:px-[50px] lg:px-[75px] md:py-[50px] flex flex-col gap-[100px]'>
        <div className='h-fit w-full max-w-[1024px] mx-auto flex items-start gap-[25px] md:gap-[50px]'>
          <div className='h-fit w-full px-[15px] md:px-0'>
            
            {/* cart heading */}
            <div className='hidden h-fit w-full md:flex items-center'>
              <p className='text-2xl font-semibold capitalize'>_cart</p>
            </div>

            {/* carts */}
            <div className='h-fit w-full flex flex-col py-[25px] gap-[25px]'>
              
              {/* cart */}
              {
                cartItems.map(item => (
                  <div key={item.product} className='h-fit w-full flex items-center justify-between gap-[15px]'>
                    <Link  to={`/product/${item.product}/`} className='h-[75px] w-[75px] bg-30'>
                      <div className='h-[75px] w-[75px] bg-30'>
                        <img src={item.image} className='h-full w-full object-cover scale-75'/>
                      </div>
                    </Link>
                    
                    <div className='h-fit w-fit flex flex-col'>
                      <p className='text-sm opacity-75'>{item.name}</p>
                      
                      {/* verients */}
                      <div className='flex'>
                        {/* verient */}
                        <div className='flex text-sm'>
                          <p className='capitalize opacity-25'>size </p>  <p className='uppercase opacity-50'>xl</p>
                        </div>
                      </div>
                      <p className=' md:text-xl font-semibold'>LKR {item.price}</p>
                    </div>

                    {/* count */}

                    <div className='hidden h-fit w-fit md:flex'>
                        <div className='h-[40px] w-[40px] bg-30 flex items-center justify-center'>
                          <p className='text-sm'><BiMinus/></p>
                        </div>

                        <div className='h-[40px] w-[40px] flex items-center justify-center'>
                          <p className=''>{item.qty}</p>
                        </div>
                        <div className='h-[40px] w-[40px] bg-30 flex items-center justify-center'>
                          <p className='text-sm'><BiPlus/></p>
                        </div>
                    </div>

                    {/* cencel */}
                    <button type='button' onClick={() => removeFromCartHandler(item.product)} className='md:h-[40px] md:w-[40px] flex items-center justify-center'>
                      <MdCancel className='md:text-2xl'/>
                    </button>
                  </div>
                ))
              }

            </div>

          </div>
          <div className='h-fit w-full md:w-[200px] lg:w-[300px] fixed bottom-0 md:relative bg-white md:bg-30'>
            <div className='h-fit w-full md:w-[200px] lg:w-[300px] md:p-[25px] p-[15px]'>
              <div className='hidden md:block h-[50px] w-full border-b-[1px] border-black border-opacity-5'>
                <p className='text-2xl font-semibold capitalize'>_sub total</p>
              </div>
              <p className='hidden md:block my-[25px]'>LKR {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</p>
              <button type='button' disabled={cartItems.length === 0} onClick={checkoutHandler} className='h-[50px] w-full border-[1px] border-10 bg-10 md:bg-transparent text-white md:text-10 capitalize flex items-center justify-center relative z-40'>
                <span className='md:hidden'>({cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)})</span>checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CartScreen