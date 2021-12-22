import React from 'react'
import { FaqData } from './FaqData';
import {FiPlus, FiMinus} from 'react-icons'
import styled from 'styled-components';
import { IconContext } from 'react-icons';

const AccordionSection = styled.div`
    
`

const Container = styled.div`

`  

const FAQ = () => {
    return (
        <IconContext.Provider>
               <AccordionSection>
                   <Container>
                       {FaqData.map((key, value) => {
                           return(
                              <>
                                 <h1 >{value.question}</h1>
                                 <p>  {value.answer}</p>
                              </>
                             );
                       })};
                   </Container>
               </AccordionSection>
        </IconContext.Provider>
        
    )
}

export default FAQ;
