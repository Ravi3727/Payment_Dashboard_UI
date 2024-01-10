import React from 'react'

function StatusColumns({orderId,status,transactionId,refundDate,orderAmount}) {
  return (
    <div className='w-full h-[44px] flex flex-row justify-between items-center'>

        <div className='w-[56px] h-[20px] font-[500] text-[14px] leading-[20px] text-center justify-start flex' style={{color:"#146EB4"}}>
            {orderId}
        </div>

        <div className='flex flex-row gap-[4px]'>
            <div  className='w-[10px] h-[10px] rounded-full mt-[6px]' style={{backgroundColor: status === "Successful"?"#17B31B":"#999999"}}>
            </div>
            <div className='w-[72px] h-[20px] font-[400] text-[14px] leading-[20px]' style={{color:"#1A181E"}}>
                {status}
            </div>
        </div>

        <div className='w-[91px] h-[20px] font-[400] text-[14px] leading-[20px]' style={{color:"#4D4D4D"}}>
            {transactionId}
        </div>

        <div className='w-[150.67px] h-[20px] font-[400] text-[14px] leading-[20px]' style={{color:"#4D4D4D"}}>
            {refundDate}
        </div>

        <div className='w-[91px] h-[20px] font-[400] text-[14px] leading-[20px] text-end justify-end' style={{color:"#1A181E"}}>
        ₹{orderAmount}
        </div>
    </div>
  )
}

export default StatusColumns