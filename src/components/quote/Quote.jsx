import React from 'react'
import "./quote.css"
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

function Quote({quote,by}) {
  return (
    <>
    
    <div className='x-center quote'>
        {quote}
        <div className='createdby'>
            {by}
        </div>
        <RiDoubleQuotesL className='tright' />
        <RiDoubleQuotesR className='bleft'/>
    </div>  
    </>

  )
}

export default Quote