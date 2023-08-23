import React from 'react'
import style from "@emotion/styled"
import Hero from '../Hero/Hero'
import Section2 from '../Section2/Section2'
import Section3 from '../Section2/Section3'
import Section4 from '../Section2/Section4'
import Section5 from '../Section2/Section5'
import Section6 from '../Section2/Section6'
import Section7 from '../Section2/Section7'
import Section8 from '../Section2/Section8'
import Experience from '../Experience/Experience'
const   Wrapper = style.div`

`

const Landing:React.FC = () => {
  return (
    <Wrapper>
        <Hero />
        <Section2 />
        <Section3 />
        <Experience />
        <Section7 />
        <Section8 />
        <Section4 />
        <Section6 />
        <Section5 />
       
    </Wrapper>
  )
}

export default Landing
