import React from 'react'
import styled from "@emotion/styled"
import Lov from "../../assets/Images/Utiva images/person.9155cc16.svg"
import Busi from "../../assets/Images/Utiva images/business.dcf0499b.webp"




const BigD = styled.div`
padding: 30px;
display: flex;
margin-top: 30px;
gap: 150px;
`
const Sticky = styled.div`
display: flex;
`
const LoveHold = styled.div``
const Love = styled.div``
const Lo = styled.img`
height: 100px;
width: 100px;
`

const Fo = styled.h3`
font-size: 25px;
`
const Work = styled.p`
line-height: 30px;
`
const Vo = styled.img`
height: 350px;
`
const Sticky1 = styled.div`
display: flex;
gap: 30px;
height: 80px;
width: 300px;
background-color: #10A662;
border-radius: 10px;
position: absolute;
right: 120px;
color: white;
padding: 50px;
`
const St = styled.div``
const Pp = styled.p`
padding:0;
margin: 0;`
const K = styled.h2`
font-weight: bolder;
font-size: 40px;

margin: 0;
`



const Section8:React.FC = () => {
  return (
    <BigD>
    <LoveHold>
    <Love>
    <Lo src={Lov}/>
    <Fo>
        For Impact
    </Fo>
    <Work>
        Working with some of the top social impact <br /> funding partners like HP, Act Foundation, we have <br />
        taken talent development to over 60 new cities and <br /> development
    </Work>
    </Love>
    </LoveHold>
    <Sticky>
    <Vo src={Busi}/>
    <Sticky1>
        <St>
           <K>
           25k
           </K>
            <Pp>
                Students <br /> Trained
            </Pp>
        </St>
        <St>
           <K>
           95%
           </K>
            <Pp>
                Training <br /> Completion
            </Pp>
        </St>
        <St>
           <K>
            35%
           </K>
            <Pp>
                Major  Partners
            </Pp>
        </St>
    </Sticky1>
    </Sticky>
    

  </BigD>
  )
}

export default Section8
