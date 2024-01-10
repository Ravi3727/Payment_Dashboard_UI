import React from 'react'
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";


function AmountPending() {
    return (
        <div className='w-[370.67px] h-[118px] flex flex-col gap-[24px]'>
            <div className='w-[149px] h-[24px] flex flex-row gap-[8px] ml-4 mt-4'>
                <div className='font-[400] w-full text-[16px] leading-[24px]' style={{color:"#4D4D4D"}}>
                    Amount Pending
                </div>
                <div >
                    <HiOutlineQuestionMarkCircle className='w-[14.4px] h-[14.4px] mt-[5.8px] ml-[0.8px]' style={{ color: "#4D4D4D" }} />
                </div>
            </div>

            <div className='w-full h-[38px] flex flex-row justify-between'>
                <div className='w-[155px] h-[38px] text-[32px] font-[500] leading-[38px] ml-4' style={{color:"#1A181E"}}>
                    ₹92,312.20
                </div>
                <div className='flex flex-row mr-1'>
                    <div className='underline w-[92px] h-[24px] font-[500] text-[16px] leading-[24px] mt-1' style={{ color: "#FFFFFF" }}>
                        13 orders
                    </div>
                    <div className='mt-[9.5px] -ml-3'>
                        <FaAngleRight style={{ color: "#FFFFFF" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmountPending