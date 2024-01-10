import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import NextPayout from './NextPayout';
import AmountPending from './AmountPending';
import AmountProcessed from './AmountProcessed';
import DataDisplay from './DataDisplay';

function AmountDisplay() {
  return (
    <>

    <div className='w-[1210px] h-[230px] flex flex-col gap-[24px] mt-[30px] ml-[32px] '>
       <div className='w-full h-[36px] flex flex-row justify-between'>
       <div className='w-[91px] h-[28px] text-[20px] leading-[28px] font-[500]' style={{color:"#1A181E"}}>
            overview
        </div>
        <div className='w-[137px] h-[36px] gap-[8px] flex flex-row border-2 rounded-[4px] '>
           <div className='w-[87px] h-[24px] mt-[6px] ml-[14px] text-[14px] leading-[24px] font-[400]' style={{color:"#4D4D4D"}}>
           This Month
           </div>

            <div>
            <FaChevronDown className='ml-[1px] mt-[10.5px]' style={{width:"14px" , height:"14px" , color:"#4D4D4D"}}/>
            </div>
        </div>
       </div>

      <div className='flex flex-row justify-between'>
      <NextPayout/>
      <AmountPending/>
      <AmountProcessed/>
      </div>


    </div>

<div className='ml-[32px]'>
<DataDisplay/>

</div>
    
    
    
    
    </>
  )
}

export default AmountDisplay