
import { FC} from 'react'
import styled from "@emotion/styled"
import Logo from "../../assets/Images/Utiva images/logo.svg"


interface Iprops{
  one: string
  two: string
  three: string
  four?: string
  five?: string
  six?: string
  seven?: string
  eight?: string
 
}
const FOOT = styled.div`
display: flex;
justify-content: space-between;
align-item: center;
padding-left: 30px;
padding-right: 100px;
padding-top: 100px;

background-color: #F0F5FF;

`
const Foot1 = styled.div``
const Img = styled.img`
padding-top: 10px;
`
const Tech = styled.p`
font-size: 14px;
`
const Log = styled.div``
const Foot2 = styled.div`


`
const Foot4 = styled.div`
display: flex;
justify-content: space-between;
gap: 60px;
`
const Foot5 = styled.div`
display: flex;
justify-content: space-between; 
`
const Div = styled.div`


`
const U1 = styled.h3`
font-size: 15px;
`
const U2 = styled.p` 
font-size: 14px;
`
const U3 = styled.p`
font-size: 14px;
`
const U4 = styled.p`
font-size: 14px;
`
const U5 = styled.p`
font-size: 14px;
`
const U6 = styled.p`
font-size: 14px;
`
const U7 = styled.p`
font-size: 14px;
`
const U8 = styled.p`
font-size: 14px;
`
const Last = styled.div`
 padding: 100px;
 text-align: center;
`
const Lt = styled.p`
font-size: 14px;
`

import React from 'react'


export const Details:React.FC<Iprops> = ({ one, two, three, four, five, six, seven, eight}) => {
  return (
   <Div>
    <U1>{one}</U1>
        <U2>{two}</U2>
        <U3>{three}</U3>
        <U4>{four}</U4>
        <U5>{five}</U5>
        <U6>{six}</U6>
        <U7>{seven}</U7>
        <U8>{eight}</U8>
   </Div>
  )
}




export const Footer:FC = () => {

const one: string = "Top Courses"
const two: string ="Dta analys Bootcamp"
  const three: string = "Product accelerator"
  const four: string = "Design Bootcamp"

  const one1: string = "Grow with Utiva"
  const two1: string ="Individuals"
  const three1: string = "Business"
  const four1: string = "Impact"
  const five1: string ="Utiva Kids"
  const six1: string = "The Nuclears"
  const seven1: string = "Ubuntu"
  const eight1: string = "Utiva Migrate"

  let one2: string = "Schools"
  let two2: string ="Data School"
  let three2: string = "Product School"
  let four2: string = "Design Scchool"
  let five2: string ="Programming School"
  let six2: string = "Cloud Computting School"
  let seven2: string = "Blockchain Dev School"
  let eight2: string = "Marketing School"


  let one4: string = "Company"
  let two4: string ="About Us"
  let three4: string = "Learining Champion"
  let four4: string = "Our Partners"
  let five4: string ="Become A trainer"
  let six4: string = "Alumni"
  let seven4: string = "carrers"
  let eight4: string = "Business Network"

  let one5: string = "Resources"
  let two5: string ="Blogs"
  let three5: string = "FAQs"
  let four5: string = "Sucess Stories"
  let five5: string ="Events"
  let six5: string = "Masterclass"
  let seven5: string = "Consultating Pratice"
  let eight5: string = "Scholarship"

  let one6: string = "Policies"
  let two6: string ="Terms and Conditions"
  let three6: string = "Privacy Policies"
  let four6: string = " Refund Policioes"
  
  let one7: string = "Contacts"
  let two7: string ="info@utiva.io"
  let three7: string = "090 5555 333"
  let four7: string = "+44 5678 4556 556"
  let five7: string ="+1 224 9999"

  return (
    <FOOT>
        <Foot1>
        <Log>
           <Img src={Logo} />
        </Log>
        <Tech>
        We are the leading TECH EDUCATION <br /> company with students from over 30 countries <br /> and a leading UK accreditation to deliver the <br /> best digital workforce training.
        </Tech>
        </Foot1>
        <Foot2>
          <Foot4>
           <Details 
            one = {one} 
            two = {two}
            three = {three}
            four = {four}
           />
           <Details 
            one = {one1} 
            two = {two1}
            three = {three1}
            four = {four1}
            five = {five1}
            six = {six1}
            seven = {seven1}
            eight = {eight1}
           />

           <Details 
            one = {one2}
            two = {two2}
            three = {three2}
            four = {four2}
            five = {five2}
            six = {six2}
            seven = {seven2}
            eight = {eight2}
           />
             
             <Details 
            one = {one4}
            two = {two4}
            three = {three4}
            four = {four4}
            five = {five4}
            six = {six4}
            seven = {seven4}
            eight = {eight4}
           />
           </Foot4>

           <Foot5>
           <Details 
                one = {one5}
                two = {two5}
                three = {three5}
                four = {four5}
                five = {five5}
                six = {six5}
                seven = {seven5}
                eight = {eight5}
              />
                <Details 
                one = {one6}
                two = {two6}
                three = {three6}
                four = {four6}
               
              />
                <Details 
                one = {one7}
                two = {two7}
                three = {three7}
                four = {four7}
                five = {five7}
               
              />

           </Foot5>
               
            <Last>
              <Lt>
              © 2023 Utiva. All right reserved
              </Lt>
            </Last>
          
        </Foot2>
    </FOOT>
  )
}

export default Footer
