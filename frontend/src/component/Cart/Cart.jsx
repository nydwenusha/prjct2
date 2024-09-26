import { Divider } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'

const items=[1,1]

const Cart = () => {
  return (
    <div>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {items.map((item) => (
            <CartItem />
          ))}
            <Divider />
            <div className='billDetails px-5 text-sm'>

                <p className='font-extralight py-5'>Bill Details</p>
                <div className='space-y-3'>
                    <div className='flex justify-between text-gray-400 '>
                         <p>Item Total</p>
                         <p>Rs.600</p>
                    </div>
                    <div className='flex justify-between text-gray-400 '>
                         <p>Deliver Fee</p>
                         <p>Rs.300</p>
                    </div>
                    <div className='flex justify-between text-gray-400 '>
                         <p>GST and Restaurant Cherges</p>
                         <p>Rs.150</p>
                    </div>
                    <Divider/>
                </div>
              <div className='flex justify-between text-gray-400'>
                  <p>Total Pay</p>
                  <p>Rs.1050</p>
              </div>
            </div>
        </section>
       <Divider orientation='vertical' flexItem/>
       <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
            
 
 
       </section>
        
      </main>
    </div>
  );
};

export default Cart
