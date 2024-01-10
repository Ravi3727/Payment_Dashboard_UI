import React from 'react'
import { CiSearch } from "react-icons/ci";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { BsDownload } from "react-icons/bs";
import Status from './Status';


function DataDisplay() {
    return (
        <>
            <div className='w-[1210px] h-[508px] mt-[40px] flex flex-col overflow-y-hidden'>

                <div className='flex flex-col gap-[24px] w-[252px] h-[84px]'>
                    <div className='w-[252px] h-[28px] font-[500] text-[20px] leading-[28px]' style={{ color: "#1A181E" }}>
                        Transactions | This Month
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className=' border-1 rounded-[40px] py-[16px] items-center' style={{ color: "#E6E6E6" }}>
                            <button className='w-[118px] h-[32px] border-1 rounded-[40px]' style={{ backgroundColor: "#E6E6E6",color:"#808080" }}>Payouts (22)</button>
                        </div>
                        <div className='px-[6px] py-[16px] items-center '>
                            <button className='w-[111px] h-[32px] border-1 rounded-[40px] p-1' style={{ backgroundColor: "#146EB4",color:"#FFFFFF" }}>
                                Refunds (6)
                            </button>
                        </div>
                    </div>
                </div>

                {/* search Bar */}
                <div className='w-[1210px] h-[40px] flex flex-row justify-between'>

                    <div className=''>

                        <form className=''>
                            <div className="flex flex-row h-[40px] mt-[40px] items-center border-2 rounded-[4px] gap-[4px] px-[10px] py-[16px]">
                                <div className=" py-[16px] flex flex-row gap-2 items-center justify-between">
                                    <div>
                                    <svg className="w-[14.45px] h-[14.19px] " style={{ color: "#999999" }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                    </div>
                                    <input type="search" id="default-search" className=" font-[400] text-[14px] leading-[20px] px-[10px] py-[16px] h-[38px] w-[240px]" style={{ color: "#999999" }} placeholder="Order ID or transaction ID" required />
                                </div>
                               
                            </div>
                        </form>
                    </div>

                    <div className='w-[131px] h-[36px] flex flex-row items-center mt-[40px] gap-[8px]'>
                        <div className='w-[68px] h-[36px] flex flex-row items-center border-[2.2px] p-1 rounded-[4px]'>
                            <div className='text-[16px] leading-[24px]' style={{ color: "#4D4D4D" }}>
                                Sort
                            </div>
                            <div>
                                <HiMiniArrowsUpDown className='w-[18px] h-[18px] mt- ml-1' style={{ color: "#4D4D4D" }} />
                            </div>
                        </div>
                        <div className='rounded-[4px] mb-[1px] border-[2.2px] h-[35px] justify-center p-1'>
                            <BsDownload className='w-[20px] h-[20px] mt-1' />
                        </div>
                    </div>
                </div>

                {/* Payment status */}
                <div className=' py-[8px] mt-16  w-[1188px] px-[8px]'>
                    <Status />
                </div>
            </div>
        </>
    )
}

export default DataDisplay