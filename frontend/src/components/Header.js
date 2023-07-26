import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiMenu, BiSearch, BiSolidShoppingBag, BiSolidUserCircle } from "react-icons/bi";
import { VscAccount } from 'react-icons/vsc';
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../actions/userActions'


const Header = () => {
    
    const location = useLocation()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

  return (
    <div className={
        location.pathname === '/login/' || location.pathname === '/register/' ?
        'hidden h-[65px] md:h-[100px]  w-full bg-transparent px-[15px] sm:px-[25px] md:px-[50px] z-50':
        'h-[65px] md:h-[100px]  w-full bg-transparent px-[15px] sm:px-[25px] md:px-[50px] z-50'
    }>
        <div className='h-full w-full max-w-[1024px] mx-auto flex items-center relative gap-[25px]'>
            <Link to={'/'} className=''>
                <p className='text-10 font-medium text-xl '>My website.</p>
            </Link>
      
            <div className=' flex gap-[25px]'>
                {
                    userInfo ?
                    <div className='flex items-center gap-[25px]'>
                        <Link 
                        to={'/profile/'}
                        className='hidden md:block opacity-50 hover:opacity-100'>
                            <p className='text-black font-medium text-sm capitalize'>
                                {userInfo.name}
                            </p>
                        </Link>
                        <button 
                        type='button'
                        onClick={logoutHandler}
                        className='hidden md:block opacity-50 hover:opacity-100'>
                            <p className='text-black font-medium text-sm capitalize'>
                                logout
                            </p>
                        </button>
                    </div>
                    :
                    <Link to={'/login/'} className='hidden md:block opacity-50 hover:opacity-100'>
                        <p className='text-black font-medium text-sm capitalize'>
                            Sign in
                        </p>
                    </Link>
                }
                {
                    userInfo && userInfo.isAdmin ?
                                        
                    <div className='h-fit w-fit flex items-center'>
                        <Link to={'/admin/dashboard'} className='opacity-50 hover:opacity-100 flex items-center justify-center'>
                            <p className='text-black font-medium text-sm capitalize'>
                                dashboard
                            </p>
                        </Link>
                    </div>
                    :
                    ''
                }
                <Link to={'/login/'} className='md:hidden opacity-50 hover:opacity-100 flex items-center justify-center'>
                    <p className='text-black font-medium text-sm uppercase'>
                        <BiSolidUserCircle className='text-2xl md:text-sm'/>
                    </p>
                </Link>
                <Link to={'/cart/'} className='opacity-50 hover:opacity-100 flex items-center justify-center'>
                    <p className='text-black font-medium text-sm uppercase'>
                        <BiSolidShoppingBag className='text-2xl md:text-sm'/>
                    </p>
                </Link>
                {/* <Link to={'/search/'} className='opacity-50 hover:opacity-100 flex items-center justify-center'>
                    <p className='text-black font-medium text-sm uppercase'>
                        <BiSearch className='text-2xl md:text-sm'/>
                    </p>
                </Link> */}
                {/* <button className='opacity-50 hover:opacity-100'>
                    <p className='text-black font-medium text-sm capitalize'>
                        Danushkan
                    </p>
                </button> */}
            </div>
        </div>
    </div>
  )
}

export default Header