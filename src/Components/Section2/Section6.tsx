import React from 'react'
import styled from "@emotion/styled"
import Map from "../../assets/Images/Utiva images/map.592c2dcc.webp"
import Pep from "../../assets/Images/Utiva images/people.fb6e3334.svg"
import Grow from "../../assets/Images/Utiva images/grow.77b9dac5.svg"
import Lern from "../../assets/Images/Utiva images/intensive-learning-white.9c6c05c8.svg"
import Exp from "../../assets/Images/Utiva images/experiment.884a709b.svg"
import Avr from "../../assets/Images/Utiva images/avatars.6597823f.webp"
import Acce1 from "../../assets/Images/Utiva images/accelerate1.3fa8c6c0.webp"
import Acce2 from "../../assets/Images/Utiva images/accelerate2.17c372b2.webp"
import Grp from "../../assets/Images/Utiva images/group-icon-white.6bb54811.svg"






const Learn = styled.div`
background-color: #000269;
padding:30px;
color: white;
`
const Holder = styled.div`
 display: flex;
 justify-content: space-between;

`
const How = styled.h2`
font-size: 50px;
background: linear-gradient(94.63deg, rgb(135, 206, 217) 10.17%, rgb(251, 175, 27) 47.09%, rgb(16, 166, 98) 83.25%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`
const Hold = styled.div`

`
const Text = styled.p``
const M = styled.img`
height: 350px;
width: 350px;
`
const People = styled.div`
display: flex;
justify-content: space-around;
gap: 40px;

`

const Info = styled.div`

`
const P = styled.img``
const UL = styled.p``
const Im = styled.h2``

const Accelerate = styled.div`
display: flex;
justify-content: space-between;
`
const Think = styled.h1`
font-size: 60px;
background: linear-gradient(94.63deg, rgb(135, 206, 217) 10.17%, rgb(251, 175, 27) 47.09%, rgb(16, 166, 98) 83.25%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

const Avatar = styled.div`
display: flex;

`

const Ar = styled.img`
height: 40px;
width: 80px;
`

const Testi = styled.h3`
padding: 0;
`
const Road = styled.div``
const Over = styled.p`
font-size: 12px;
`
const Bux = styled.div`
display: flex;
`
const Tiry = styled.div`
height: 350px;
width: 350px;
background-color: white;
color: black;
`
const Tiry1 = styled.div`
height: 350px;
width: 350px;
background-color: #06CF74;
color: black;
`
const K = styled.h2`
font-size: 70px;

`
const Acer = styled.img`
height: 350px;
width: 350px;
`
const HR = styled.h2`
font-size: 70px;
`
const Last = styled.div``
const Tx = styled.p``
const Tx2 = styled.p` color: #FBAF1B; 
:hover {
    transform: scale(0.99);
`
const Tx3 = styled.div``



const Section6:React.FC = () => {
  return (
    <Learn>
      <Holder>
      <Hold>
            <How>
                How you will Learn
            </How>
            <Text>
                Premium skills learning across the entire digital product lifecycle: data,<br /> design, development, marketing, and product management.
            </Text>
      
        </Hold>
        <M src={Map}/>
      
      </Holder>
      <People>
        <Info>
        <P src={Lern}/>
        <Im>
        Immersive Learning
        </Im>
        <UL>
            <li>Robust content and Videos</li>
            <li>Self-paced + Live Classes</li>
            <li>Assessments and projects</li>
        </UL>
        </Info>
        <Info>
        <P src={Pep}/>
        <Im>
        Lectures & Lab
        </Im>
        <UL>
            <li>Weekend classes</li>
            <li>Intensive training</li>
            <li>Focus on real business cases</li>
        </UL>
        </Info>
        <Info>
        <P src={Exp}/>
        <Im>
        Capstone Projects
        </Im>
        <UL>
            <li>Work on multiple projects</li>
            <li>Get real-time feedback</li>
            <li>Real-time mentoring</li>
        </UL>
        </Info>
        <Info>
        <P src={Grow}/>
        <Im>
        Job & Career Coaching
        </Im>
        <UL>
            <li>Learn to leverage LinkedIn</li>
            <li>CV for tech industry</li>
            <li>Access to job opportunities</li>
            <li>Demo sessions on interviews</li>
        </UL>
        </Info>
      </People>
      <Accelerate>
          <Think>
          Accelerate Your <br /> Growth. Think it,<br /> become it with Utiva
          </Think>
          <Avatar>
          <Ar src={Avr}/>
          <Road>
             <Testi>
                Road Testimonias
             </Testi>
             <Over>
                Over 20  Amazing Stories
             </Over>
          </Road>
          </Avatar>
      </Accelerate>
      <Bux>
        <Tiry>
           <K>
            30K +
           </K>
        </Tiry>
        <Acer src={Acce1}/>
        <Tiry1>
           <HR>
            85 %
           </HR>
        </Tiry1>
        <Acer src={Acce2}/>

      </Bux>
      <Last>
        <Tx>
        We are a platform that helps you learn tech skills and turn projects into hiring visibility.
        </Tx>
        <Tx2>
          Get Started
        </Tx2>
        <Tx3>
        <Ar src={Grp}/>
        </Tx3>
      </Last>
     
     

    </Learn>

  )
}

export default Section6
