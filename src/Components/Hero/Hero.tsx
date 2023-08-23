import React from 'react'
import styled from '@emotion/styled'
import Pic from "../../assets/Images/Utiva images/chisom.webp"
import Threeimg from "../../assets/Images/Utiva images/avatar.b.png"
import ButtonIcon from '../Pressabales/ButtonIcon'

const SecOne = styled.div`
display: flex;
justified-content: space-between;
align-item: center;
gap: 250px;
font-family: CustomFonts;
background-color: #FAFAF1;
margin-bottom: 50px;
padding: 30px;
`
const Text = styled.h2`
 font-size: 70px;
	font-weight: bolder;
	color: var(--color-primary);
	margin-bottom: 15px;
	line-height: 70px;
`
const Tex = styled.p`
 font-size: 17px;
 line-height: 25px 
`
const Left = styled.div``

const Right = styled.div``
const Photo = styled.img`
  height: 500px;
  width: 450px;
  0bject-fit: cover;
  overflow: hidden;
`

const ButtonHolder = styled.div`
display: flex;
height: 60px;
gap: 20px;
`
const SmallP = styled.img`
    height: 30px;
    padding-top: 30px;
   

`

const H = styled.p` 
margin-bottom:50px;
font-size: 13px;
padding-top: 25px;`
const TextIm = styled.div`
display: flex;
gap: 5px;
`
const Hero:React.FC = () => {
  return (
    <SecOne>
      <Left>
        <Text>
          Building Top Tech
              <br /> Talents for the <br />
              World
        </Text>
        <Tex>
          Our Bootcamps are designed to help you learn from the best <br /> industry leaders from more than 19 countries.
        </Tex>
        <ButtonHolder>
              <ButtonIcon  
              bg='#fbaf1b' bd='' text='Individual' cl='white' 
              />
              <ButtonIcon 
              bg='transparent'
              bd='rgb(251, 175, 27)'
              text='Bussiness'
              cl='#050794'
              />
        </ButtonHolder>
        <TextIm>
            <SmallP src= {Threeimg}/>
            <H>
            Over 30k+ professionals trained. Read stories
            </H>
        </TextIm>
     </Left>
     <Right>
        <Photo src={Pic}/>
     </Right>
    </SecOne>
  )
}

export default Hero
