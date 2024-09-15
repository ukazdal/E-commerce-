"use client"

import Avatar from '../general/Avatar';
import { Rating } from '@mui/material';

const Comment = ({prd}: {prd : any}) => {    
  return (
    <div className='flex md:justify-between border rounded-md w-full mb-3 p-2 md:p-5'>
         <div className='flex items-start flex-col'>
            <div className='flex items-center gap-x-2 mb-3'>
                <Avatar image={prd?.user?.avatar} />
                <div className='font-bold'>{prd?.user?.name}</div>
            </div>
            <div className='text-slate-500'>
                {prd.comment}
            </div>
         </div>
        <Rating name="read-only" value={prd.rating} readOnly />


    </div>
  )
}

export default Comment