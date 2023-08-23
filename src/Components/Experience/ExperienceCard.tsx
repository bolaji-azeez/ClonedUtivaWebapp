
 import React from 'react'
import styled from '@emotion/styled'
import {MdArrowForward} from "react-icons/md"


const Container = styled.div`
    margin: 20px;
    padding: 0;
  
`
const H2 = styled.div`
    color: white;
    font-weight: bold;
    font-size: 20px;
    
`

const Box = styled.div<{bgg: string}>`
    border-radius: 15px;
    width: 350px;
    gap: 5px;
    padding-bottom: 70px;
    background-color: ${(props)=> props.bgg};


    img{
        width: 350px;
        object-fit: cover;
        cursor: pointer;
        :hover{
            filter: grayscale(1);
            transform: scale(1.01);
        }
    }

`

const S =styled.span``

const IconBox =styled.div`
   margin-left:10px;
`

const Holder =styled.div`
    color: white;
    display: flex;
    line-height: 50px;
`

const BoxHold = styled.div`
    position: relative;
    left: 10px;
    top: 30px;
`

interface Iprops{
    text: string
    span: string
    bg: string
    avatar:any
}


const ExperienceCard :React.FC<Iprops> = ({avatar, bg, text, span}) => {
  return (
    <Container>
        <Box bgg={bg}>
        <img src= {avatar}
        />
          <BoxHold>
            <H2>{text}</H2>
            <Holder>
                <S>{span}</S>
                <IconBox>{<MdArrowForward/>}</IconBox>
            </Holder>
           </BoxHold>
        </Box>
      
    </Container>
  )
}

export default ExperienceCard