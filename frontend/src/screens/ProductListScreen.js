import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts, deleteProduct, createProduct } from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GrAnalytics } from 'react-icons/gr'
import { FiEdit } from 'react-icons/fi'

const ProductListScreen = () => {
  const dispatch = useDispatch()
  const history = useNavigate()
  const location = useParams()

    const productList = useSelector(state => state.productList)
    const { loading, error, products, pages, page } = productList

    const productDelete = useSelector(state => state.productDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete

    const productCreate = useSelector(state => state.productCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct } = productCreate


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    let keyword = location.search

    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_RESET })

        if (!userInfo.isAdmin) {
            history('/login')
        }

        if (successCreate) {
            history(`/admin/product/${createdProduct._id}/edit`)
        } else {
            dispatch(listProducts(keyword))
        }

    }, [dispatch, history, userInfo, successDelete, successCreate, createdProduct, keyword])


    const deleteHandler = (id) => {

        if (window.confirm('Are you sure you want to delete this product?')) {
            dispatch(deleteProduct(id))
        }
    }

    const createProductHandler = () => {
        dispatch(createProduct())
    }

  return (
    <div className='bg-white'>
      <section className='h-fit w-full md:px-[50px] lg:px-[75px] md:py-[50px] flex flex-col gap-[100px]'>
        <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col md:flex-row items-start gap-[25px] md:gap-[50px]'>
          <div className='h-fit w-full flex flex-col justify-center gap-[25px]'>
            <div className='h-fit w-full flex items-center justify-between'>
              <p className='text-2xl font-semibold'>_Products</p>
              <button onClick={createProductHandler} className='px-[15px] py-[10px] bg-orange-500'>
                <p className='font-semibold text-white'>Add</p>
              </button>
            </div>
            {
              loading ?
              <p>loading</p> :
              error ?
              <p>error</p> :
              <div className='h-fit w-full flex flex-col'>
                <div className='h-[50px] w-full flex items-center border-b-[1px] px-[10px] border-black border-opacity-5'>                   
                    <p className='w-[10%] opacity-100 capitalize font-semibold'>Product id</p>
                    <p className='w-[30%] opacity-100 capitalize font-semibold'>name</p>
                    <p className='w-[20%] opacity-100 capitalize font-semibold'>price</p>
                    <p className='w-[20%] opacity-100 capitalize font-semibold'>Brand</p>
                </div>
                {
                  products.map(item => (
                    <div className={
                      item._id % 2 == 0 ?
                      'h-[65px] w-full flex items-center px-[10px] bg-gray-200':
                      'h-[65px] w-full flex items-center px-[10px]'
                    }>                   
                        <p className='w-[10%] opacity-50 capitalize'>{item._id}</p>
                        <p className='w-[30%] opacity-50 capitalize'>{item.name}</p>
                        <p className='w-[20%] opacity-50 lowercase'>{item.price}</p>
                        <p className='w-[20%] opacity-50 capitalize'>{item.brand}</p>
                        <div className='w-[20%] flex items-center justify-center text-2xl'>
                          <Link to={`/admin/product/${item._id}/edit`} className='h-[40px] w-[100px] bg-yellow-500 flex items-center justify-center text-sm rounded-[5px] capitalize'>
                            view
                          </Link>
                          <Link to={`/product/${item._id}/`} className='h-[40px] w-[100px] bg-blue-600 flex items-center justify-center text-sm rounded-[5px] capitalize text-white'>
                            details
                          </Link>
                        </div>
                    </div>
                  ))
                }
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductListScreen