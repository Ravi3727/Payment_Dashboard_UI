import React from 'react'
import DownArrow from '../assets/DownArrow.svg';
import logo from '../assets/Image.png';
import home from '../assets/Home.svg';
import order from '../assets/Order.svg';
import product from '../assets/Product.svg';
import delivery from '../assets/Delivery.svg';
import marketing from '../assets/Marketing.svg';
import analytics from '../assets/Analytics.svg';
import payment from '../assets/Payment.svg';
import tools from '../assets/Tools.svg';
import discount from '../assets/Discount.svg';
import audience from '../assets/Audience.svg';
import appearance from '../assets/Appearance.svg';
import plugin from '../assets/Plugin.svg';
import OneItem from './OneItem';
import wallet from '../assets/wallet.svg';


function Navbar() {
  const navbarItems = [
    {
      icon: home,
      tag: "Home"
    },
    {
      icon: order,
      tag: "Order"
    },
    {
      icon: product,
      tag: "Product"
    },
    {
      icon: delivery,
      tag: "Delivery"
    },
    {
      icon: marketing,
      tag: "Marketing"
    },
    {
      icon: analytics,
      tag: "Analytics"
    },
    {
      icon: payment,
      tag: "Payment"
    },
    {
      icon: tools,
      tag: "Tools"
    },
    {
      icon: discount,
      tag: "Discount"
    },
    {
      icon: audience,
      tag: "Audience"
    },
    {
      icon: appearance,
      tag: "Appearance"
    },
    {
      icon: plugin,
      tag: "Plugin"
    }
  ]
  return (
    <>
      <div className='w-[224px] h-[882px] flex flex-col py-[16px] px-[10px] gap-[16px]' style={{ backgroundColor: "#1E2640" }}>

        <div className='flex flex-row justify-evenly'>
          <div>
            <img className="w-[39px] h-[39px] border-1 rounded-[4px]" src={logo} alt="" />
          </div>

          <div className='flex flex-col gap-[4px] text-start justify-center'>
            <div className='text-[15px] leading-[22px] font-[500] w-[108px] h-[22px]' style={{color:" #FFFFFF"}}>
              Nishyan
            </div>
            <div className='opacity-[0.8] text-[13px] font-[400] leading-[16px] underline w-[108px] h-[16px]' style={{color:" #FFFFFF"}} >
              visit store
            </div>
          </div>

          <div className='w-[20px] h-[20px] mt-2'>
            <img src={DownArrow} alt="downarrow" />
          </div>
        </div>

        <div className='w-[208px] h-[912px] flex flex-col gap-2 text-white'>
          {
            navbarItems.map((item) => (
              <OneItem icon={item.icon} name={item.tag} key={item.tag} />
            ))
          }
        </div>


        <div className='w-[192px] h-[54px] flex flex-row border-1 rounded-[4px] items-start gap-[10px] px-[6px] py-[12px]' style={{backgroundColor:"rgba(255, 255, 255, 0.10)", color: "var(--Black-100, #FFF"}}>
          <div className='w-[149px] h-[42px] gap-[12px] flex flex-row'>
          <div className='p-[6px] border-1 rounded-[4px] w-[36px] h-[36px]' style={{backgroundColor:"rgba(255, 255, 255, 0.10)"}}>
            <img src={wallet} alt="wallet"  className='w-[24px] h-[24px]' />
          </div>
          <div className='flex flex-col'>
            <div className='text-[13px] leading-[16px] font-[400] opacity-[0.8] w-[106px] h-[16px]'>
              Available credits
            </div>
            <div className='w-[45px] h-[24px] text-[16px] font-[500] leading-[24px'>
              222.10
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar