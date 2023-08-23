import React from 'react'
import styled from "@emotion/styled"
import Slack from "../../assets/Images/Utiva images/slack.4a47068f.png"
import  Facebook from "../../assets/Images/Utiva images/facebook.b3379556.webp"
import Capital from "../../assets/Images/Utiva images/capitalOne.c4dd2a9e.png"
import Google from "../../assets/Images/Utiva images/google.9d00820e.jpg"
import Amazon from "../../assets/Images/Utiva images/amazon.b63df6f8.webp"
import Samsung from "../../assets/Images/Utiva images/samsung.b73775e1.png"
import Shopify from "../../assets/Images/Utiva images/shopify.8b4a07db.png"
import Thrive from "../../assets/Images/Utiva images/thrive_agric.e92719e7.jpeg"
import Tiktok from "../../assets/Images/Utiva images/tiktok.51111cc4.png"
import  MasterC from "../../assets/Images/Utiva images/mastercard.fee2b8c6.webp"
import Mc from "../../assets/Images/Utiva images/macdonald.69fd4c16.png"
import Pwc from "../../assets/Images/Utiva images/pwc.0f5a4f04.png"
import Sap from "../../assets/Images/Utiva images/sap.1f3a0db3.png"
import Hoot from "../../assets/Images/Utiva images/Hootsuite.6f43348b.png"
import Kpmg from "../../assets/Images/Utiva images/kpmg.4a1c032e.png"
import Stripe from "../../assets/Images/Utiva images/stripe.b76f9b2f.png"
import Bundle from "../../assets/Images/Utiva images/bundle.198a3754.png"
import  Map from "../../assets/Images/Utiva images/map.592c2dcc.webp"
import Flutter from "../../assets/Images/Utiva images/flutterwave.6e97705a.png"
import Paystack from "../../assets/Images/Utiva images/paystack.5577e2b0.png"
import Mono from "../../assets/Images/Utiva images/mono.b4cdd575.jpeg"
import Bamboo from "../../assets/Images/Utiva images/bamboo.05accedd.png"
import Nomba from "../../assets/Images/Utiva images/nomba.e2ea1ed9.jpeg"
import Teamapt from "../../assets/Images/Utiva images/teamapt.18b44ce9.png"





const Section1 = styled.section`

font-family: CustomFonts;
background-color: white;
padding: 30px;
`
const T1 = styled.div`

`
const Our = styled.p`
margin-bottom: 50px;
`
const T2 = styled.div``
const Line1 = styled.div`
display: flex;
gap: 50px;
margin-bottom: 30px;
`
const L = styled.img`
  height: 40px;
  width: 120px;
  margin-bottom: 30px;
`
const Line2 = styled.div`
display: flex;
gap: 50px;
margin-bottom: 30px;
`
const Line3 = styled.div`
display: flex;
gap: 50px;
margin-bottom: 30px;`

const Line4 = styled.div`
display: flex;
gap: 50px;
margin-bottom: 30px;`

const New = styled.div`
display: flex;

`
const Boc = styled.div`
height: 30px;
width: 50px;
background-color: #25B370;
border-radius: 40px;
`
const T3 = styled.p`
  font-size: 13px;
  color: white;
  text-align: center;
`
const T4 = styled.p`
  font-size: 13px;
  text-align: center;
`






const Section2:React.FC = () => {
  return (
    <Section1>
        <T1>
           <Our>
           Our Talents Work With Many of these Leading Tech Companies
           </Our>
        </T1>
        <T2>
          <Line1>
                <L src={Slack}/>
                <L src={Facebook}/>
                <L src={Capital}/>
                <L src={Google}/>
                <L src={Amazon}/>
                <L src={Samsung}/>
                <L src={Shopify}/>
                <L src={Thrive}/>
          </Line1>
          <Line2>
          <L src={Kpmg}/>
                <L src={Tiktok}/>
                <L src={MasterC}/>
                <L src={Mc}/>
                <L src={Pwc}/>
                <L src={Sap}/>
                <L src={Hoot}/>
                <L src={Stripe}/>
          </Line2>
          <Line3>
          <L src={Teamapt}/>
                <L src={Bundle}/>
                <L src={Map}/>
                <L src={Flutter}/>
                <L src={Paystack}/>
                <L src={Mono}/>
                <L src={Bamboo}/>
                <L src={Nomba}/>
          </Line3>
          <Line4>
          <L src={Slack}/>
                <L src={Facebook}/>
                <L src={Capital}/>
                <L src={Google}/>
                <L src={Amazon}/>
                <L src={Samsung}/>
                <L src={Shopify}/>
                <L src={Thrive}/>
          </Line4>
          
        </T2>
        <New>
           <Boc>
              <T3>
                New
              </T3>
              
           </Boc>
           
                <T4>
                  HP Inc to support Utiva's mission to empower African women. Read more
                </T4>
           
        </New>
    </Section1>
  )
}

export default Section2
