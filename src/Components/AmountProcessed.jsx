import React from 'react'
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

function AmountProcessed() {
  return (
    <div className='w-[370.67px] h-[118px] flex flex-col gap-[24px] '>
            <div className='w-[170px] h-[24px] flex flex-row ml-4 mt-4'>
                <div className='font-[400] w-full text-[16px] leading-[24px]' style={{color:"#4D4D4D"}}>
                    Amount Processed
                </div>
                <div >
                    <HiOutlineQuestionMarkCircle className='w-[14.4px] h-[14.4px] mt-[5.8px] ml-[0.8px]' style={{ color: "#4D4D4D" }} />
                </div>
            </div>

                <div className='w-[155px] h-[38px] text-[32px] font-[500] leading-[38px] ml-4' style={{color:"#1A181E"}}>
                    ₹23,92,312.19
                </div>
            
        </div>
  )
}

export default AmountProcessed