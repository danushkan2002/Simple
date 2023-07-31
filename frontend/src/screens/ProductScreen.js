import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { listProductDetails, createProductReview } from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
import { MdOutlineStarHalf, MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md"
import { VscSettings } from 'react-icons/vsc'
import { HiMiniArrowLongRight, HiOutlineArrowLongRight } from 'react-icons/hi2'
import { BiMinus, BiPlus } from 'react-icons/bi'
import Rating from '../components/Rating'
import { listOrders } from '../actions/orderActions'


const ProductScreen = () => {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()
    const {pid} = useParams()
    const history = useNavigate()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    const orderList = useSelector(state => state.orderList)
    const { orders } = orderList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const {
        loading: loadingProductReview,
        error: errorProductReview,
        success: successProductReview,
    } = productReviewCreate

    useEffect(() => {
        if (successProductReview) {
            setRating(0)
            setComment('')
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }

        dispatch(listProductDetails(pid))
        if (userInfo && userInfo.isAdmin) {
            dispatch(listOrders())
        }
    }, [dispatch, pid, successProductReview, userInfo ])

    const addToCartHandler = () => {
        history(`/cart/${pid}?qty=${qty}`)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(
            pid, {
            rating,
            comment
        }
        ))
    }

    const increaceQty = () => {
        setQty(qty+1)
    }
    
    const decreaceQty = () => {
        setQty(qty-1)
    }

    useEffect(() => {    
      dispatch(listProductDetails(pid))
      
    }, [pid, dispatch])
    

  return (
    <div className='h-fit w-full'>
        
            {
                loading?
                <p>loading</p>:
                error ?
                <p>Error</p> :
                <section className='h-fit w-full md:px-[50px] lg:px-[75px] md:py-[50px] flex flex-col gap-[100px]' >
                    <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col md:flex-row items-start gap-[25px] md:gap-[50px]'>
                        <div className='h-fit w-full md:w-[400px] flex flex-col gap-[15px]'>
                            <div className='h-[400px] w-full md:w-[400px] border-[1px]'>
                                <img src={product.image} className='h-full w-full object-cover' />
                            </div>
                        </div>
                        <div className='h-fit w-full flex flex-col gap-[25px] px-[15px] md:px-0'>
                            <div className='flex flex-col gap-[5px]'>
                                <p className='text-lg capitalize font-semibold'>{product.name} </p>
                                {
                                    userInfo && userInfo.isAdmin?
                                    <Link to={`/admin/product/${product._id}/edit`}>
                                        <p className='font-semibold text-white'>Edit</p>
                                    </Link>:
                                    ''
                                }
                                <Rating value={product.rating} />
                                <p className='text-2xl font-semibold opacity-50'>LKR {product.price}</p>
                            </div>

                            
                            <div className='h-fit w-full flex flex-col items-start gap-[5px] '>
                                <div className='h-[40px] w-full bg-60 rounded-full flex'>
                                    <button onClick={
                                        qty === 1 ?
                                        console.log(''):
                                        decreaceQty
                                    } className='h-[40px] w-[40px] bg-30 flex items-center justify-center'>
                                        <p className='text-sm'><BiMinus/></p>
                                    </button>
                                    <div className='h-[40px] w-[40px] flex items-center justify-center'>
                                        <p className='text-sm'>{qty}</p>
                                    </div>
                                    <button onClick={
                                        product.countInStock === qty ?
                                        console.log(''):
                                        increaceQty 
                                    } className='h-[40px] w-[40px] bg-30 flex items-center justify-center'>
                                        <p className='text-sm'><BiPlus/></p>
                                    </button>
                                </div>
                                <p className='text-xs capitalize'>Available Stock</p>
                            </div>

                            <div className=''>
                                <p className='text-sm opacity-50'>{product.description}</p>
                            </div>
                            <div className='h-fit w-full'>
                                

                            </div>
                            <div className='h-fit w-full flex gap-[25px] md:gap-[50px]'>
                                <button  onClick={addToCartHandler} type='button' className='h-[50px] w-1/2 bg-black border-[1px] border-black'>
                                    <p className='text-sm font-medium text-white'>Add to bag</p>
                                </button>
                                <Link to={'/cart/'} className='h-[50px] w-1/2 bg-transparent border-[1px] border-10 flex items-center justify-center'>
                                    <p className='text-sm font-medium text-10'>Buy now</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {
                        userInfo && userInfo.isAdmin && product?
                        <div className='h-fit w-full px-[100px] border-y-[1px] py-[50px]'>
                            <div className='w-[200px] flex flex-col py-[50px]'>
                                <div className='flex justify-between'>
                                    <p className='capitalize opacity-50'>Total Reviews</p>: <p className=''>{product.reviews.map(i=>i).length}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='capitalize opacity-50'>Positive Reviews</p>: <p className=''>{
                                        (product.reviews.filter(i => i.rating < 3).length)
                                    }</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='capitalize opacity-50'>Negative Reviews</p>: <p className=''>{
                                    (product.reviews.filter(i => i.rating >= 3).length)}</p>
                                </div>
                            </div>
                            <div className='h-fit w-full max-w-[1024px] mx-auto flex items-end justify-between px-[50px] py-[25px] border-l-[1px] border-b-[1px]'>
                                <div className='h-[300px] w-[15%] max-w-[100px] flex flex-col justify-end items-center'>
                                    <div style={
                                        loading ?
                                        "":
                                        {height: (100*(product.reviews.filter(i => i.rating == 1).length)/(product.reviews.map(i=>i).length))*3}
                                    } className={`w-full bg-10 `} >

                                    </div>
                                    
                                </div>
                                <div className='h-[300px] w-[15%] max-w-[100px] flex flex-col justify-end items-center'>
                                    <div style={
                                        loading ?
                                        "":
                                        {height: (100*(product.reviews.filter(i => i.rating == 2).length)/(product.reviews.map(i=>i).length))*3}
                                    } className={`w-full bg-10 `} >

                                    </div>
                                    
                                </div>
                                <div className='h-[300px] w-[15%] max-w-[100px] flex flex-col justify-end items-center'>
                                    <div style={
                                        loading ?
                                        "":
                                        {height: (100*(product.reviews.filter(i => i.rating == 3).length)/(product.reviews.map(i=>i).length))*3}
                                    } className={`w-full bg-10 `} >

                                    </div>
                                    
                                </div>
                                <div className='h-[300px] w-[15%] max-w-[100px] flex flex-col justify-end items-center'>
                                    <div style={
                                        loading ?
                                        "":
                                        {height: (100*(product.reviews.filter(i => i.rating == 4).length)/(product.reviews.map(i=>i).length))*3}
                                    } className={`w-full bg-10 `} >

                                    </div>
                                    
                                </div>
                                <div className='h-[300px] w-[15%] max-w-[100px] flex flex-col justify-end items-center'>
                                    <div style={
                                        loading ?
                                        "":
                                        {height: (100*(product.reviews.filter(i => i.rating == 5).length)/(product.reviews.map(i=>i).length))*3}
                                    } className={`w-full bg-10 `} >

                                    </div>
                                    
                                </div>                        
                            </div>
                            <div className='h-fit w-full max-w-[1024px] mx-auto flex items-end justify-between px-[50px] py-[25px]'>
                                <div className='h-[50px] w-[15%] max-w-[100px] flex items-center justify-center'>
                                    <div className='h-[50px] w-full flex justify-center capitalize opacity-50 text-sm'>
                                        poor
                                        ({(product.reviews.filter(i => i.rating == 1).length)}/{(product.reviews.map(i=>i).length)})
                                    </div>
                                </div>
                                <div className='h-[50px] w-[15%] max-w-[100px] flex items-center justify-center'>
                                    <div className='h-[50px] w-full flex justify-center capitalize opacity-50 text-sm'>
                                        fair
                                        ({(product.reviews.filter(i => i.rating == 2).length)}/{(product.reviews.map(i=>i).length)})
                                    </div>
                                </div>
                                <div className='h-[50px] w-[15%] max-w-[100px] flex items-center justify-center'>
                                    <div className='h-[50px] w-full flex justify-center capitalize opacity-50 text-sm'>
                                        Good
                                        ({(product.reviews.filter(i => i.rating == 3).length)}/{(product.reviews.map(i=>i).length)})
                                    </div>
                                </div>
                                <div className='h-[50px] w-[15%] max-w-[100px] flex items-center justify-center'>
                                    <div className='h-[50px] w-full flex justify-center capitalize opacity-50 text-sm'>
                                        very good
                                        ({(product.reviews.filter(i => i.rating == 4).length)}/{(product.reviews.map(i=>i).length)})
                                    </div>
                                </div>
                                <div className='h-[50px] w-[15%] max-w-[100px] flex items-center justify-center'>
                                    <div className='h-[50px] w-full flex justify-center capitalize opacity-50 text-sm'>
                                        exellent
                                        ({(product.reviews.filter(i => i.rating == 5).length)}/{(product.reviews.map(i=>i).length)})
                                    </div>
                                </div>
                            </div>
                        </div>:
                        ''
                    }

                    <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col items-start gap-[25px] px-[15px] md:px-0'>
                        <div className='h-[50px] w-full flex items-center'>
                            <div className='h-fit w-fit flex items-center gap-[5px]'>
                                <p className='hidden text-2xl font-semibold capitalize md:block'>Scraped Review</p>
                            </div>
                        </div>
                        {
                            userInfo && !userInfo.isAdmin ?
                            <form onSubmit={submitHandler} className='h-fit w-full py-[50px]'>
                                <div className='h-fit w-full flex items-center'>
                                {
                                    rating==0 ?
                                    <div className='flex items-center text-4xl'>
                                        <MdOutlineStarOutline onClick={() => setRating(1)} className=''/>
                                        <MdOutlineStarOutline onClick={() => setRating(2)} className=''/>
                                        <MdOutlineStarOutline onClick={() => setRating(3)} className=''/>    
                                        <MdOutlineStarOutline onClick={() => setRating(4)} className=''/>
                                        <MdOutlineStarOutline onClick={() => setRating(5)} className=''/>
                                    </div>:
                                    <Rating value={rating} size={'4xl'}/>
                                }

                                </div>
                                <div className='h-[50px] w-full'>
                                <div className={
                                comment === "" ?
                                'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-5 duration-100':
                                'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-10 duration-100'
                                }>
                                <input autoComplete={false} autoSave={false} placeholder='Comment' required={true} value={comment} onChange={(e) => setComment(e.target.value)} className='relative z-20 h-[40px] w-full outline-none bg-transparent text-black'></input>
                                </div>
                                </div>
                                <button type='submit' className='h-[50px] w-full max-w-[100px] bg-black capitalize text-white ml-auto mt-[25px]'>
                                    send
                                </button>
                            </form>:
                            ''
                        }
                        <div className='h-fit w-full flex flex-col'>
                            <div className='h-fit w-full flex items-center border-b-[1px] border-black'>
                                <div className='h-[50px] w-[10%] text-sm capitalize font-semibold'></div>
                                <div className='h-[50px] w-[20%] text-sm capitalize font-semibold'>review_auther</div>
                                <div className='h-[50px] w-[30%] text-sm capitalize font-semibold'>review_postsed_date</div>
                                <div className='h-[50px] w-[30%] text-sm capitalize font-semibold'>review_text</div>
                                <div className='h-[50px] w-[10%] text-sm capitalize font-semibold'>review_length</div>
                            </div>

                            {
                                product.reviews.map(item => (
                                    <div className='h-fit w-full flex items-center border-b-[1px] border-black border-opacity-50'>
                                        <div className='h-fit min-h-[75px] w-[10%] flex items-center text-sm capitalize'>{item._id}</div>
                                        <div className='h-fit min-h-[75px] w-[20%] flex items-center text-sm capitalize'>{item.name}</div>
                                        <div className='h-fit min-h-[75px] w-[30%] flex items-center text-sm capitalize'>{item.createdAt}</div>
                                        <div className='h-fit min-h-[75px] w-[30%] flex items-center text-sm capitalize'>{item.comment}</div>
                                        <div className='h-fit min-h-[75px] w-[10%] flex items-center text-sm capitalize'>{item.name}</div>
                                    </div> 
                                ))
                            }
                            
                            
                        </div>
                    </div>
                </section>
            }

    </div>
  )
}

export default ProductScreen