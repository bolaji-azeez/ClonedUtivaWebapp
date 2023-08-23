import React from 'react'
import styled from '@emotion/styled'
import GreenButton from "../Pressabales/Greenbutton"

interface Iprops{
 but:any
 link:string
 title:string
 text:string
}
const Container = styled.div`
 background-color: white;
 padding: 30px;
 
`
const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 gap: 20px;
`
const H1 = styled.h1`
 font-size: 40px;
 font-weight: bold;
 color: #050794;
`
const Box = styled.div` 
   padding: 20px;
   background-color: white;
   border: 2px solid sliver;
   border-radius: 10px;
`
const ButHold = styled.div``
const H2 = styled.h2`
 font-size: 35px;
 font-weight: bold;
`
const H4 = styled.h4`
  color: #4A4AAE;
`
export const HeroCard: React.FC<Iprops> =({but, text, link,title}) =>{
 return(
   <Box>
     <ButHold>{but}</ButHold>
     <H2>{title}</H2>
     <p>{text}</p>
     <H4>{link}</H4>
   </Box>
 )
}

 export const Hero2 = () => {
 const title1: string ="Internship BOOTCAMP Designed To Help You Get Into Tech";
 const title2: string ="Start a Tech Career With an international Work Experience"
 const text1: string = "Learn tech with others in virtual classes, work on projects, and build your portfolio."
 const text2: string ="Learn tech skills in class,get paired with one of our companies and work in real work environment"
 const link1: string ="View Programs"
 const link2: string ="View Programs"
  return (
    <Container>                                                                                                             <H1>
        What is the Best Learning Program<br/> for you?
      </H1>  
        <Wrapper>
            <HeroCard but ={<GreenButton cl ="white" bd ="" bg = "rgba(8, 160,92)" text = "BOOTCAMP" />} title = {title1} text = {text1} link = {link1} />
            <HeroCard but ={<GreenButton cl ="white" bd ="" bg ="rgba(8, 160, 92)" text = "BOOTCAMP + INTERNSHIP" />} title = {title2} text = {text2} link = {link2} />
        </Wrapper>                                                                   
    </Container>
  )
}

export default Hero2