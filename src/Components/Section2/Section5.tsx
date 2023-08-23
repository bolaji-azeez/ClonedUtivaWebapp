import React from 'react'
import styled from "@emotion/styled"
import I1 from "../../assets/Images/Utiva images/impact3.806984b1.webp"
import I2 from "../../assets/Images/Utiva images/impact4.bbb0b17b.webp"
import I3 from "../../assets/Images/Utiva images/impact1.586cab30.webp"
import I4 from "../../assets/Images/Utiva images/impact2.e990c819.webp"





const Reason = styled.div`
padding: 30px;
`
const Impact = styled.div``
const Utiva = styled.h3``
const More = styled.div``
const Learn = styled.h3`
color: #000269;
`
const We = styled.h1`
font-size: 100px;
background: linear-gradient(94.63deg, rgb(0, 2, 105) 10.17%, rgb(251, 175, 27) 47.09%, rgb(16, 166, 98) 83.25%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`
const Illustration = styled.div`
padding: 30px;
`
const Photo = styled.img`
height: 320px;
width: 320px;
`



const Section5:React.FC = () => {
  return (
    <Impact>
      <Reason>
        <We>
        Impact is the <br /> reason we exist!
        </We>
        <Utiva>
          Utiva.impact is an impact project of Utiva, a tech company <br /> 
          that is powering the tech side of learning for people of <br />
          colour and minorities across Africa and the world.       
        </Utiva>
        <More>
            <Learn>
            Learn More
            </Learn>
        </More>
      </Reason>

      <Illustration>
      <Photo src={I1}/>
      
      <Photo src={I3}/>
      <Photo src={I4}/>
      <Photo src={I2}/>
      </Illustration>


    </Impact>
  )
}

export default Section5
