import React from 'react'
import styled from "@emotion/styled"


const Digital = styled.div`
padding: 30px;
background-color: #F8F8FD;

`
const SmallD = styled.div`

`

const H2 = styled.h2`
font-size: 50px;
font-weight: bolder;
margin-top: 60px;


`
const H4 = styled.p`
margin-bottom: 60px;
`




const Section7:React.FC = () => {
  return (
    <Digital>
      <SmallD>
        <H2>
        Digital Transformation for <br /> Individuals and Businesses.
        </H2>
        <H4>
        We are a Technology Workforce Development company that helps people <br /> 
        learn premium technology skills virtually and partners with companies to <br />
         hire the best talents and invest in workforce development. Currently with <br />
          learners from 19 countries.
        </H4>
      </SmallD>
      
    </Digital>
  )
}

export default Section7
