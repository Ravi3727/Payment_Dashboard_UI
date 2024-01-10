import React from 'react'

function oneItem({name,icon}) {
  return (
    <div className='flex flex-row gap-[12px] w-[208px] h-[36px] px-[8px] py-[16px] items-start border-1 rounded-[12px] '>
        <div>
            <img src={icon} alt="icon" className='w-[18.5px] h-[15.41px] opacity-[0.8]'/>
        </div>
        <div className='text-[14px] font-[500] leading-[20px]h-[20px] w-[64px] opacity-[0.8]'>
            {name}
        </div>
    </div>
  )
}

export default oneItem