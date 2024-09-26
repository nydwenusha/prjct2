import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

/*const ingredients=[
    {
        category:"Nuts & seeds",
        ingredients:"Cashews"
    },
    {
        category:"Protein",
        ingredients:"Protein"
    },
    {
        category:"Protein",
        ingredients:"Bacon strips"

    }
]
    */

const demo=[
    {
        category:"Nuts & seeds",
        ingredients:["Cashews"]
    },
    {
        category:"Protein",
        ingredients:["Ground beef","Bacon strips"]
    },
     
]

const MenuCard = () => {
    const handleCheckBoxChange=(value)=>{
console.log("value")
    }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://images.unsplash.com/photo-1508736793122-f516e3ba5569?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Burger</p>
              <p>Rs.499</p>
              <p className="text-gray-400">nice food</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {demo.map((item) => (
              <div>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingredients.map((item) => (
                    <FormControlLabel 
                       control={
                          <Checkbox onChange={() => handleCheckBoxChange(item)} />
                        }
                       label={item} 
                       />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>
          <div className='pt-5'>
             <Button variant="contained" disabled={false} type="submit">{true?"Add to Cart":"Out Of Stock"}</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;

