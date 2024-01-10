import React from 'react'
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { RiMessage2Fill } from "react-icons/ri";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import AmountDisplay from './AmountDisplay';


function Topnav() {
    return (
        <> <div className='flex flex-col'>


            <div className='flex flex-row items-center justify-evenly w-[1294px] h-[64px] py-[32px] border-b-2' style={{ backgroundColor: "FFFFFF" }}>
                {/* Left side icons */}
                <div className='w-[360px] h-[28px] flex flex-row gap-[16px]'>
                    <div className='w-[81px] h-[28px] font-[500] text-[20px] leading-[28px]' style={{ color: "#1A181E" }}>
                        Payouts
                    </div>
                    <div className='flex flex-row items-center w-[94px] h-[16px] mt-2 gap-[4px]' >
                        <div>
                            <HiOutlineQuestionMarkCircle />
                        </div>
                        <div className='text-[12px] leading-[16px] font-[400] w-[74px] h-[16px]' style={{ color: "#4D4D4D", backgroundColor: "#F2F2F2" }}>
                            How it works
                        </div>
                    </div>

                </div>

                {/* Search bar */}

                <div className="w-[400px] h-[41px] border-2 px-[9px] rounded-[6px] py-[16px] flex items-center flex-row justify-between gap-4" style={{backgroundColor:"#F2F2F2"}}>
                    <div>
                    <svg className="w-[14.45px] h-[14.19px] " style={{ color: "#999999" }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    </div>
                    <input type="search" id="default-search" className=" font-[400] text-[14px] leading-[20px] px-[12px] py-[16px] h-[38px] w-[350px]" style={{ backgroundColor: "#F2F2F2",color:"#808080" }} placeholder="Search feactures,tutorials,etc." required />
                </div>

                {/* Right side Icons */}
                <div className='w-[360px] h-[40px] flex flex-row gap-[8px] float-left justify-end'>

                    <div className='flex flex-row gap-[12px] w-[92px] h-[40px]'>
                        <div className='w-[40px] h-[40px] border-1 rounded-full items-center justify-center flex' style={{ backgroundColor: "#F2F2F2" }}>
                            <RiMessage2Fill style={{ width: "22px", height: "22px", color: "#4D4D4D" }} />
                        </div>

                        <div className='w-[40px] h-[40px] border-1 rounded-full items-center justify-center flex' style={{ backgroundColor: "#F2F2F2" }}>
                            <IoMdArrowDropdownCircle style={{ width: "22px", height: "22px", color: "#4D4D4D" }} />
                        </div>
                    </div>
                </div>
            </div>

            <AmountDisplay />


        </div>
        </>

    )
}

export default Topnav