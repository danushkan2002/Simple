import React from 'react'
import { MdOutlineStarHalf, MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md"


const Rating = ({value, size}) => {
  return (
    <div className={`h-fit w-fit flex items-center text-yellow-400 text-${size}`}>
        {
            value >= 1 ?
            <MdOutlineStarPurple500/>:
            value >= 0.5 ?
            <MdOutlineStarHalf/>:
            <MdOutlineStarOutline/>
        }
        {
            value >= 2 ?
            <MdOutlineStarPurple500/>:
            value >= 1.5 ?
            <MdOutlineStarHalf/>:
            <MdOutlineStarOutline/>
        }
        {
            value >= 3 ?
            <MdOutlineStarPurple500/>:
            value >= 2.5 ?
            <MdOutlineStarHalf/>:
            <MdOutlineStarOutline/>
        }
        {
            value >= 4 ?
            <MdOutlineStarPurple500/>:
            value >= 3.5 ?
            <MdOutlineStarHalf/>:
            <MdOutlineStarOutline/>
        }
        {
            value >= 5 ?
            <MdOutlineStarPurple500/>:
            value >= 4.5 ?
            <MdOutlineStarHalf/>:
            <MdOutlineStarOutline/>
        }
    </div>
  )
}

export default Rating