import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { listProductDetails, createProductReview } from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
import { MdOutlineStarHalf, MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md"
import { VscSettings } from 'react-icons/vsc'
import { HiMiniArrowLongRight, HiOutlineArrowLongRight } from 'react-icons/hi2'
import dayjs from "dayjs"
import { BiMinus, BiPlus } from 'react-icons/bi'
import Rating from '../components/Rating'

const ProductScreen = () => {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()
    const {pid} = useParams()
    const history = useNavigate()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

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

        // alert((100*(product.reviews.filter(i => i==1).length)/(product.reviews.map(i=>i).length)))
        // if (product) {
        //     alert(product.reviews.map(i => i).length)
        //     alert((100*(product.reviews.filter(i => i.rating == 2).length)/(product.reviews.map(i=>i).length))*3)
        // }
        dispatch(listProductDetails(pid))

    }, [dispatch, pid, successProductReview, ])

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
                            <div className='h-[400px] w-full md:w-[400px] bg-30'>
                                <img src={product.image} className='h-full w-full object-cover' />
                            </div>
                            <div className='hidden md:flex h-fit w-full items-center justify-center gap-[15px]'>
                                <div className='h-[100px] w-[100px] bg-30'>

                                </div>
                                <div className='h-[100px] w-[100px] bg-30'>

                                </div>
                            </div>
                        </div>
                        <div className='h-fit w-full flex flex-col gap-[25px] px-[15px] md:px-0'>
                            <div className='flex flex-col gap-[5px]'>
                                <p className='font-semibold'>{product.name}</p>
                                <div className='flex items-center text-sm'>
                                    <MdOutlineStarPurple500/>
                                    <MdOutlineStarPurple500/>
                                    <MdOutlineStarHalf/>
                                    <MdOutlineStarOutline/>
                                    <MdOutlineStarOutline/>
                                </div>
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
                                
                                

                                {/* <div className='h-fit w-full'>
                                    <div className='h-[50px] w-full flex items-center border-b-[1px] border-black border-opacity-5'>
                                        <p className='text-sm uppercase'>size</p>
                                    </div>
                                    <div className='h-fit w-full flex flex-wrap gap-[10px] py-[15px]'>
                                        <button className='h-[50px] min-w-[50px] w-fit px-[10px] p-[15px] focus:border-opacity-100 focus:border-10 flex items-center justify-center border-[1px] border-black border-opacity-10'>
                                            <p className='text-sm uppercase'>sm</p>
                                        </button>
                                        <button className='h-[50px] min-w-[50px] w-fit px-[10px] p-[15px] focus:border-opacity-100 focus:border-10 flex items-center justify-center border-[1px] border-black border-opacity-10'>
                                            <p className='text-sm uppercase'>xl</p>
                                        </button>
                                        <button className='h-[50px] min-w-[50px] w-fit px-[10px] p-[15px] focus:border-opacity-100 focus:border-10 flex items-center justify-center border-[1px] border-black border-opacity-10'>
                                            <p className='text-sm uppercase'>xxl</p>
                                        </button>
                                    </div>
                                </div>

                                <div className='h-fit w-full'>
                                    <div className='h-[50px] w-full flex items-center border-b-[1px] border-black border-opacity-5'>
                                        <p className='text-sm uppercase'>color</p>
                                    </div>
                                    <div className='h-fit w-full flex flex-wrap gap-[10px] py-[15px]'>
                                        <button className='h-[50px] min-w-[50px] w-fit p-[2px] focus:border-opacity-100 focus:border-10 flex items-center justify-center border-[1px] border-black border-opacity-10'>
                                            <div className='h-full w-full bg-red-900'>

                                            </div>
                                        </button>
                                        <button className='h-[50px] min-w-[50px] w-fit p-[2px] focus:border-opacity-100 focus:border-10 flex items-center justify-center border-[1px] border-black border-opacity-10'>
                                            <div className='h-full w-full bg-blue-900'>

                                            </div>
                                        </button>
                                        <button className='h-[50px] min-w-[50px] w-fit p-[2px] focus:border-opacity-100 focus:border-10 flex items-center justify-center border-[1px] border-black border-opacity-10'>
                                            <div className='h-full w-full bg-gray-500'>

                                            </div>
                                        </button>
                                    </div>
                                </div> */}

                            </div>
                            <div className='h-fit w-full flex gap-[25px] md:gap-[50px]'>
                                <button  onClick={addToCartHandler} type='button' className='h-[50px] w-1/2 bg-black border-[1px] border-black'>
                                    <p className='text-sm font-medium text-white'>Add to bag</p>
                                </button>
                                {/* <button className='h-[50px] w-1/2 bg-transparent border-[1px] border-10'>
                                    <p className='text-sm font-medium text-10'>Add to bag</p>
                                </button> */}
                            </div>
                        </div>
                    </div>
                    <div className='h-fit w-full px-[100px] border-y-[1px] py-[50px]'>
                        <div className='w-[200px] flex flex-col py-[50px]'>
                            <div className='flex justify-between'>
                                <p className='capitalize opacity-50'>Total Reviews</p>: <p className=''>10</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='capitalize opacity-50'>Positive Reviews</p>: <p className=''>5</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='capitalize opacity-50'>Negative Reviews</p>: <p className=''>5</p>
                            </div>
                        </div>
                        <div className='h-fit w-full max-w-[1024px] mx-auto flex items-end justify-between px-[50px] py-[25px] border-l-[1px] border-b-[1px]'>
                            <div className='h-[300px] w-[15%] max-w-[100px] flex flex-col justify-end items-center'>
                                <div style={{
                                    height: (100*(product.reviews.filter(i => i.rating == 1).length)/(product.reviews.map(i=>i).length))*3
                                }} className={`w-full bg-10 `} >

                                </div>
                                
                            </div>
                            <div className='h-[300px] w-[15%] max-w-[100px] flex flex-col justify-end items-center'>
                                <div style={{
                                    height: (100*(product.reviews.filter(i => i.rating == 2).length)/(product.reviews.map(i=>i).length))*3
                                }} className={`w-full bg-10 `} >

                                </div>
                                
                            </div>
                            <div className='h-[300px] w-[15%] max-w-[100px] flex flex-col justify-end items-center'>
                                <div style={{
                                    height: (100*(product.reviews.filter(i => i.rating == 3).length)/(product.reviews.map(i=>i).length))*3
                                }} className={`w-full bg-10 `} >

                                </div>
                                
                            </div>
                            <div className='h-[300px] w-[15%] max-w-[100px] flex flex-col justify-end items-center'>
                                <div style={{
                                    height: (100*(product.reviews.filter(i => i.rating == 4).length)/(product.reviews.map(i=>i).length))*3
                                }} className={`w-full bg-10 `} >

                                </div>
                                
                            </div>
                            <div className='h-[300px] w-[15%] max-w-[100px] flex flex-col justify-end items-center'>
                                <div style={{
                                    height: (100*(product.reviews.filter(i => i.rating == 5).length)/(product.reviews.map(i=>i).length))*3
                                }} className={`w-full bg-10 `} >

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
                    </div>
                    <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col items-start gap-[25px] px-[15px] md:px-0'>
                        <div className='h-[50px] w-full border-y-[1px] border-black border-opacity-5 flex items-center justify-between'>
                            <VscSettings className='text-2xl'/>
                            <div className='h-fit w-fit flex items-center gap-[5px]'>
                                <p className='hidden text-sm capitalize md:block'>View all</p>
                                <HiMiniArrowLongRight/>
                            </div>
                        </div>
                        {
                            userInfo ?
                            <form onSubmit={submitHandler} className='h-fit w-full bg-30 px-[25px] py-[50px]'>
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
                                <input autoComplete={false} autoSave={false} placeholder='Comment' required={true} value={comment} onChange={(e) => setComment(e.target.value)} className='relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
                                </div>
                                </div>
                                <button type='submit' className='h-[50px] w-full max-w-[100px] bg-10 capitalize text-white ml-auto mt-[25px]'>
                                    send
                                </button>
                            </form>:
                            ''
                        }
                        <div className='h-fit w-full flex flex-col gap-[50px]'>
                            {/* comment */}
                            {
                                product.reviews.map(item => (
                                    <div className='h-fit w-full flex flex-col gap-[10px]'>
                                        <div className='h-fit w-full flex items-center justify-between'>
                                            <div className='h-fit w-fit flex items-center gap-[10px]'>
                                                <div className='h-[50px] w-[50px] rounded-full bg-10'></div>
                                                <div className='flex flex-col gap-[5px]'>
                                                    <p className='text-xs font-semibold capitalize'>{item.name}</p>
                                                    <Rating value={item.rating}/>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <p className='text-xs opacity-50'>{dayjs(item.createdAt).format('DD MMM YYYY')}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-[15px]'>
                                            <p className='opacity-50'>{item.comment}</p>
                                            {/* <div className='flex items-center gap-[15px]'>
                                                <div className='h-[50px] md:h-[100px] w-[50px] md:w-[100px] bg-30'>

                                                </div>
                                                <div className='h-[50px] md:h-[100px] w-[50px] md:w-[100px] bg-30'>

                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            }


        <section className='h-fit w-full py-[50px] px-[15px] sm:px-[25px] md:px-[50px]'>
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

            </div>
            </div>
        </section>
    </div>
  )
}

export default ProductScreen