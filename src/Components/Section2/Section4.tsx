import styled from "@emotion/styled"
import Sc1 from "../../assets/Images/Utiva images/school1.3a9c7c3a.webp"
import Sc2 from "../../assets/Images/Utiva images/school2.98d4097d.webp"
import Sc3 from "../../assets/Images/Utiva images/school3.bc79b689.webp"
import Sc4 from "../../assets/Images/Utiva images/school4.e812c507.webp"
import Sc5 from "../../assets/Images/Utiva images/school5.1c2b2134.webp"
 import Sc6 from "../../assets/Images/Utiva images/school6.370083b5.webp"
// import Sc7 from "../../assets/Images/Utiva images/school7.f36eb4e0.webp"



const CardHolder = styled.section``

const Card = styled.div`
display: flex;
gap: 25px;
`
const Hold = styled.div`
height: 400px;
`
const Card1 = styled.div`
display: flex;
gap: 20px;
`
const Hold1 = styled.div`
height: 500px;
`
const Photo = styled.img`
height:300px;
width: 300px; 
`
const Color = styled.div`
height: 150px;
width: 360px;
background-color: #050794;
padding: 20px;
color: white;

`
const I = styled.h3`
 font-size: 25px;
`
const D = styled.h3`
font-size: 25px;
font-weight: Bolder;
`
const P = styled.p``
const H = styled.h3`
 font-size: 25px;
`
const U = styled.h3`
font-size: 25px;
font-weight: Bolder;
`
const V = styled.p``
import React from 'react'

const Section4:React.FC = () => {
  return (
    <CardHolder>
    <Card>

        <Hold>
           
              <Photo src={Sc1} />
           
           <Color>
              <I>
                I am intrested in 
              </I>
                <D>
                    Datas and Numbers
                </D>
                <V>
                    View courses
                </V>
           </Color>
        </Hold>

        <Hold>
           
              <Photo src={Sc2} />
           
           <Color>
              <I>
                I am intrested in 
              </I>
                <D>
                    Datas and Numbers
                </D>
                <V>
                    View courses
                </V>
           </Color>
        </Hold>

        <Hold>
           
              <Photo src={Sc3} />
           
           <Color>
              <I>
                I am intrested in 
              </I>
                <D>
                    Datas and Numbers
                </D>
                <V>
                    View courses
                </V>
           </Color>
        </Hold>

    </Card>

    <Card1>

        <Hold1>
           
              <Photo src={Sc4} />
           
           <Color>
              <P>
                I am intrested in 
              </P>
                <H>
                    Datas and Numbers
                </H>
                <U>
                    View courses
                </U>
           </Color>
        </Hold1>

        <Hold1>
           
              <Photo src={Sc5} />
              <Color>
              <P>
                I am intrested in 
              </P>
                <H>
                    Datas and Numbers
                </H>
                <U>
                    View courses
                </U>
           </Color>
           
        </Hold1>

        <Hold1>
           
              <Photo src={Sc6} />
           
              <Color>
              <P>
                I am intrested in 
              </P>
                <H>
                    Datas and Numbers
                </H>
                <U>
                    View courses
                </U>
           </Color>
        </Hold1>

    </Card1>
    </CardHolder>
  )
}

export default Section4
