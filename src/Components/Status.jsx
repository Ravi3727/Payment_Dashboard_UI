import React from 'react'
import StatusColumns from './StatusColumns'
function Status() {

    const Status = [
        {
            orderId : "#281209",
            status : "Successful",
            transactionId :"131634495747",
            refundDate :"Today,08:45 PM",
            orderAmount : "1,125.00",
        },
        {
            orderId : "#281209",
            status : "Processing",
            transactionId :"131634495747",
            refundDate :"Today,08:45 PM",
            orderAmount : "1,125.00",
        },
        {
            orderId : "#281209",
            status : "Successful",
            transactionId :"131634495747",
            refundDate :"Today,08:45 PM",
            orderAmount : "1,125.00",
        },
        {
            orderId : "#281209",
            status : "Successful",
            transactionId :"131634495747",
            refundDate :"Today,08:45 PM",
            orderAmount : "1,125.00",
        },
        {
            orderId : "#281209",
            status : "Successful",
            transactionId :"131634495747",
            refundDate :"Today,08:45 PM",
            orderAmount : "1,125.00",
        },
        {
            orderId : "#281209",
            status : "Successful",
            transactionId :"131634495747",
            refundDate :"Today,08:45 PM",
            orderAmount : "1,125.00",
        },
    ]
  return (
    <div className='w-[1188px] h-full overflow-x-hidden'>
        <div className='flex flex-row justify-between py-3 px-1 rounded-[4px]' style={{backgroundColor:"#F2F2F2"}}>
            <div className='items-center justify-start flex w-[80px] h-[20px] font-[500] text-[14px] leading-[20px]' style={{color:"#4D4D4D"}}>
                Order ID
            </div>
            <div  className='items-center justify-center w-[80px] flex h-[20px] font-[500] text-[14px] leading-[20px]' style={{color:"#4D4D4D"}}>
                Status
            </div>
            <div  className=' items-center w-[100px] ml-[2.5rem] justify-center flex h-[20px] font-[500] text-[14px] leading-[20px]' style={{color:"#4D4D4D"}}>
                Transaction ID
            </div>
            <div  className='w-[150.67px] items-center justify-center flex h-[20px] font-[500] text-[14px] leading-[20px]' style={{color:"#4D4D4D"}}>
                Refund date
            </div>
            <div  className=' items-center justify-end flex w-[150.67px] h-[20px] font-[500] text-[14px] leading-[20px]' style={{color:"#4D4D4D"}}>
                Order amount
            </div>
        </div>

        <div className='w-full flex flex-col'>
            {
                Status.map((status)=> (
                    <StatusColumns orderId={status.orderId} status={status.status} transactionId={status.transactionId} refundDate={status.refundDate} orderAmount={status.orderAmount} key={status.orderId}/>
                ))
            }

        </div>
    </div>
  )
}

export default Status