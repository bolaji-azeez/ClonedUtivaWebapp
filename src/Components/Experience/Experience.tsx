import React from 'react'
import styled from '@emotion/styled'
import {LiaHandPointer} from "react-icons/lia"
import ExperienceCard from "../Experience/ExperienceCard"

import pic1 from "../../assets/Images/Utiva images/school1.3a9c7c3a.webp"
import pic2 from "../../assets/Images/Utiva images/school2.98d4097d.webp"
import pic3 from "../../assets/Images/Utiva images/school3.bc79b689.webp"
import pic4 from "../../assets/Images/Utiva images/school4.e812c507.webp"
import pic5 from "../../assets/Images/Utiva images/school5.1c2b2134.webp"
import pic6 from "../../assets/Images/Utiva images/school6.370083b5.webp"
import pic7 from "../../assets/Images/Utiva images/school7.f36eb4e0.webp"
import pic8 from "../../assets/Images/Utiva images/school8.7eb5d2ac.webp"
import pic9 from "../../assets/Images/Utiva images/school4.e812c507.webp"


const Container=styled.div`
    position:relative;
    top:50px;
    margin: 30px;
  

    h1{
        color: #050794;
        font-weight: bold;
        font-size: 50px;
    }

    p{
        font-weight: bold;
        font-size: 20px;
        color: #5d5b5b;
    }

`

const Icon= styled.div`
    color: #FBAF1B;
    position: relative;
    bottom: 30px;
    margin-left: 50px;
    font-size: 30px;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`



const Experience :React.FC= () => {
    let text1:string ="I am interested in Data and numbers"
    const span1:string = "View Courses"
    const text2:string ="I am interested in Design Creatives"
    const span2:string ="View Courses"
    const text3:string ="I am interested in Products"
    const span3:string ="View Courses"
    const text4:string ="I am interested in Business Analysis"
    const span4:string ="View Courses"
    const text5:string ="I am interested in Programming"
    const span5:string ="View Courses"
    const text6:string ="I am interested in Cloud Development"
    const span6:string ="View Courses"
    const text7:string ="I am interested in Product Marketing"
    const span7:string ="View Courses"
    const text8:string ="I am interested in Blockchain"
    const span8:string ="View Courses"
    const text9:string ="I am interested in Cybersecurity"
    let span9:string ="View Courses"
  
  return (
    <Container>
    <h1>Experience Lifelong Learning with Utiva <br /> Bootcamp</h1>
    <p>Bootcamp         Bootcamp + internship</p>
    <Icon>{<LiaHandPointer />}</Icon>

    <Wrapper>
    <ExperienceCard
    bg ="#050794"
    avatar ={pic1}
    text = {text1}
    span = {span1}
    />

    <ExperienceCard
    bg = "#0C8F54"
    avatar = {pic2}
    text = {text2}
    span = {span2}
    />

    
    <ExperienceCard
    bg = "#7C01A7"
    avatar = {pic3}
    text = {text3}
    span = {span3}
    />

    
    <ExperienceCard
    bg = "#A78700"
    avatar = {pic4}
    text = {text4}
    span = {span4}
    />

    
    <ExperienceCard
    bg = "#A74F46"
    avatar = {pic5}
    text = {text5}
    span = {span5}
    />

    
    <ExperienceCard
    bg = "#0E8F8F"
    avatar = {pic6}
    text = {text6}
    span = {span6}
    />

    
    <ExperienceCard
    bg = "#10A662"
    avatar = {pic7}
    text = {text7}
    span = {span7}
    />

    
    <ExperienceCard
    bg = "#000269"
    avatar = {pic8}
    text = {text8}
    span = {span8}
    />

    
<ExperienceCard
    bg = "#A78700"
    avatar = {pic9}
    text = {text9}
    span = {span9}
    />    


    </Wrapper>
    
   </Container>
  );
};

export default Experience