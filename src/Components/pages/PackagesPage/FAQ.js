import React from 'react'
import {FaqData} from './FaqData'
import { IconContext } from 'react-icons'
import { Add } from '@material-ui/icons';
import { Remove } from '@material-ui/icons';
import styled from 'styled-components'
import classes from './faq.module.css';

import { useState } from 'react';





const Container = styled.div`

box-shadow:2px 10px 35px 1px rgba(153, 153, 153, 0.3)

`;

const Wrapper  = styled.div`
display:flex;
justify-content:center;
background:#AB5498;
color:#fff;
align-items:center;
cursor:pointer;
border:1px;

h1{
    padding:2rem;
    font-size:2rem;
}
span{
    margin-right:1.5rem;
}


`;

const DropDown = styled.div`
backhround:#ab5498;
color:#000;
width:100%;
height:auto;
border-bottom:3px solid #6065AD;
border-top:3px solid #6065AD;

p{
    font-size:2rem;
}

`


   const FAQ = () => {

    const [clicked, setClicked] = useState(false);

       const toggle = index =>{
    if(clicked === index){
        return setClicked(null);
    }
    setClicked(index);
   
}


    return (
        <div className={classes.faq}>
            <h1>Freaquently Asked Questions</h1>

        <IconContext.Provider>
                   <Container>
                       {FaqData.map((value, index) =>{
                           return  (
                           <>
                           
                           <Wrapper onClick={() => toggle(index)} key={index}>
                              <h1>{value.question}</h1>
                              <span>{clicked === index ? <Remove /> : <Add />}</span>
                              </Wrapper>

                                {clicked === index ? (
                                   <DropDown> 
                                   <p className={classes.text}>{value.answer}</p>
                                  </DropDown>     
    
                                ): null}
                              
                           </>
                 )
                       })}
                   </Container>      
        </IconContext.Provider>
        </div>
    )
}

export default FAQ;
