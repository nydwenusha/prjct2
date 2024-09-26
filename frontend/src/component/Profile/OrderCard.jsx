import React from 'react'
import { Card } from '@mui/material';

import { Button } from "@mui/material"

const OrderCard = () => {
  return (
     <Card className="flex justify-between items-center p-5">
        <div className='flex items-center space-x-5'>
             <img className='h-16 w-16'
                   src="https://images.unsplash.com/photo-1710091691777-3115088962c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D" 
                   alt=""   
             />
             <div>
                <p>Biryani</p>
                <p>Rs.399</p>
             </div>
        </div>
       <div>
          <Button className="cursor-not-allowed">completed</Button>
       </div>
     </Card>
  )
}

export default OrderCard
