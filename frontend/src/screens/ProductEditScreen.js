import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

const ProductEditScreen = () => {
  
  const {id} = useParams()
  const history = useNavigate()


  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const { error, loading, product } = productDetails

  const productUpdate = useSelector(state => state.productUpdate)
  const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate


  useEffect(() => {

      if (successUpdate) {
          dispatch({ type: PRODUCT_UPDATE_RESET })
          history('/admin/productlist')
      } else {
          if (!product.name || product._id !== Number(id)) {
              dispatch(listProductDetails(id))
          } else {
              setName(product.name)
              setPrice(product.price)
              setImage(product.image)
              setBrand(product.brand)
              setCategory(product.category)
              setCountInStock(product.countInStock)
              setDescription(product.description)

          }
      }



  }, [dispatch, product, id, history, successUpdate])

  const submitHandler = (e) => {
      e.preventDefault()
      dispatch(updateProduct({
          _id: id,
          name,
          price,
          image,
          brand,
          category,
          countInStock,
          description
      }))
  }

  const uploadFileHandler = async (e) => {
      const file = e.target.files[0]
      const formData = new FormData()

      formData.append('image', file)
      formData.append('product_id', id)

      setUploading(true)

      try {
          const config = {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          }

          const { data } = await axios.post('/api/products/upload/', formData, config)


          setImage(data)
          setUploading(false)

      } catch (error) {
          setUploading(false)
      }
  }

  return (
    <section className='h-fit w-full md:px-[50px] lg:px-[75px] md:py-[50px] flex flex-col gap-[100px]'>
        <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col md:flex-row items-start justify-center gap-[25px] md:gap-[50px]'>
          <form onSubmit={submitHandler} className='h-fit w-full md:w-fit py-[25px] md:py-[50px] px-[15px] md:px-[50px] md:bg-white'>

            {/* title */}
            <div className='h-fit w-full md:w-[350px] pb-[25px] md:pb-[10px]'>
              <buttonk to={'/'} className='text-3xl font-medium text-black'>Edit Product.</buttonk>
            </div>

            {/* input */}
            <div className='h-fit w-full mt-[25px] flex flex-col gap-[5px]'>

              <div className='h-[50px] w-full'>
                <div className={
                  name === "" ?
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-5 duration-100':
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-10 duration-100'
                }>
                  <p className={
                    name === "" ?
                    'opacity-25 absolute top-1/2 transform -translate-y-1/2 duration-100 z-0 capitalize':
                    'text-xs opacity-50 absolute top-0 transform -translate-y-1/2 capitalize duration-100 z-0'
                  }>Username</p>
                  <input type='text' autoComplete={false} autoSave={false} required={true} value={name} onChange={(e) => setName(e.target.value)} className='capitalize relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
                </div>
              </div>

              <div className='h-[50px] w-full'>
                <div className={
                  price === "" ?
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-5 duration-100':
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-10 duration-100'
                }>
                  <p className={
                    price === "" ?
                    'opacity-25 absolute top-1/2 transform -translate-y-1/2 duration-100 z-0 capitalize':
                    'text-xs opacity-50 absolute top-0 transform -translate-y-1/2 capitalize duration-100 z-0'
                  }>Price</p>
                  <input type='price' autoComplete={false} autoSave={false} required={true} value={price} onChange={(e) => setPrice(e.target.value)} className='capitalize relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
                </div>
              </div>

              <div className='h-[50px] w-full'>
                <div className={
                  price === "" ?
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-5 duration-100':
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-10 duration-100'
                }>
                  
                  <input type='file' className='capitalize relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
                </div>
              </div>

              <div className='h-[50px] w-full'>
                <div className={
                  brand === "" ?
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-5 duration-100':
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-10 duration-100'
                }>
                  <p className={
                    brand === "" ?
                    'opacity-25 absolute top-1/2 transform -translate-y-1/2 duration-100 z-0 capitalize':
                    'text-xs opacity-50 absolute top-0 transform -translate-y-1/2 capitalize duration-100 z-0'
                  }>brand</p>
                  <input type='text' autoComplete={false} autoSave={false} required={true} value={brand} onChange={(e) => setBrand(e.target.value)} className='capitalize relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
                </div>
              </div>

              <div className='h-[50px] w-full'>
                <div className={
                  category === "" ?
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-5 duration-100':
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-10 duration-100'
                }>
                  <p className={
                    category === "" ?
                    'opacity-25 absolute top-1/2 transform -translate-y-1/2 duration-100 z-0 capitalize':
                    'text-xs opacity-50 absolute top-0 transform -translate-y-1/2 capitalize duration-100 z-0'
                  }>category</p>
                  <input type='text' autoComplete={false} autoSave={false} required={true} value={category} onChange={(e) => setCategory(e.target.value)} className='capitalize relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
                </div>
              </div>

              <div className='h-[50px] w-full'>
                <div className={
                  countInStock === "" ?
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-5 duration-100':
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-10 duration-100'
                }>
                  <p className={
                    countInStock === "" ?
                    'opacity-25 absolute top-1/2 transform -translate-y-1/2 duration-100 z-0 capitalize':
                    'text-xs opacity-50 absolute top-0 transform -translate-y-1/2 capitalize duration-100 z-0'
                  }>count In Stock </p>
                  <input type='text' autoComplete={false} autoSave={false} required={true} value={countInStock} onChange={(e) => setCountInStock(e.target.value)} className='capitalize relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
                </div>
              </div>

              <div className='h-[50px] w-full'>
                <div className={
                  description === "" ?
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-5 duration-100':
                  'h-fit w-full flex items-end relative border-b-[1px] border-black border-opacity-10 duration-100'
                }>
                  <p className={
                    description === "" ?
                    'opacity-25 absolute top-1/2 transform -translate-y-1/2 duration-100 z-0 capitalize':
                    'text-xs opacity-50 absolute top-0 transform -translate-y-1/2 capitalize duration-100 z-0'
                  }>description</p>
                  <input type='text' autoComplete={false} autoSave={false} required={true} value={description} onChange={(e) => setDescription(e.target.value)} className='capitalize relative z-20 h-[40px] w-full outline-none bg-transparent'></input>
                </div>
              </div>

              {/* <div className='h-fit w-full'>
                <div className='h-[50px] w-full flex items-center gap-[15px] duration-100'>
                  
                  <input type='checkbox' name='paymentMethod' autoComplete={false} autoSave={false} required={true} 
                  checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} 
                  className='relative z-20 h-[24px] w-[24px] p-[10px] focus:bg-10 focus:text-10 outline-none bg-transparent'></input>
                  <p className='opacity-50 duration-100 z-0'>Admin </p>
                </div>
              </div> */}

            </div>

            {/* submit */}
            <button type='submit' className='h-[50px] w-full bg-10 capitalize text-white mt-[25px]'>
                Submit
            </button>

          </form>
        </div>
      </section>
  )
}

export default ProductEditScreen