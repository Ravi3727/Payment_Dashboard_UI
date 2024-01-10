import React from 'react'
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";

function NextPayout() {
    return (

        <>

            <div className='w-[370.67px] h-[154px] rounded-[8px]' style={{ background: "#146EB4" }}>
                <div className='w-[330.67px] h-[24px] justify-start flex flex-col gap-[22px]'>
                    {/* First col */}
                    <div className='w-[117px] h-[24px] flex flex-row gap-[8px] ml-4 mt-4'>
                        <div className='w-[93px] h-[24px] font-[400] text-[16px] leading-[24px]' style={{ color: "#FFFFFF" }}>
                            Next Payout
                        </div>
                        <div >
                            <HiOutlineQuestionMarkCircle className='w-[14.4px] h-[14.4px] mt-[5.8px] ml-[0.8px]' style={{ color: "#FFFFFF" }} />
                        </div>
                    </div>
{/* Second col */}
                    <div className='w-full h-[38px] flex flex-row justify-between ml-4'>
                        <div className='w-[132px] h-[38px] font-[500] text-[32px] leading-[38px]' style={{color:"#FFFFFF"}}>
                        ₹2,312.23
                        </div>
                        <div className='flex flex-row '>
                        <div className='underline w-[92px] h-[24px] font-[500] text-[16px] leading-[24px] mt-1' style={{color:"#FFFFFF"}}>
                            23 orders 
                        </div>
                        <div className='mt-[9.5px] -ml-3'>
                        <FaAngleRight style={{ color: "#FFFFFF" }}/>
                        </div>
                        </div>
                    </div>

{/* Third col */}
                    <div className='w-[370.67px] h-[36px] justify-between items-center flex flex-row px-[8px] py-[24px] border-1 rounded-[8px]' style={{backgroundColor:"#0E4F82"}}>
                        <div>
                        <div className='w-[123px] h-[20px] font-[400] text-[14px] leading-[20px]' style={{color:"#F2F2F2"}}>
                            Next payout date:
                        </div>
                        </div>
                        <div className='w-[109px] h-[20px] font-[500] text-[14px] leading-[20px]' style={{color:"#F2F2F2"}}>
                            Today,04:00PM
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NextPayout