import React from "react"
import styled from "@emotion/styled"
import {AiOutlineDown} from "react-icons/ai"
import Button from "../Pressabales/Button"
import Log from "../../assets/Images/Utiva images/logo.svg"


const FHead = styled.section`
height: 50px;
display: flex;
justify-content: space-between;
align-item: center;
padding: 20px;
background-color: #FAFAF1;
font-family: CustomFonts;
`
const Logo = styled.div`
//   margin-left: 20px;
`
const Naav = styled.div`
display: flex;
align-item: center;
@media screen and (max-width: 768px) {
    display: none;
}

`

const N = styled.nav`
display: flex;
margin-right: 20px;
cursor: pointer;
margin-right: 40px;

:hover {
    color: rgba(0, 0, 0.3);
}
`
const Buttt = styled.div`
gap: 20px;
display: flex;
// margin-right: 0px;
`
const Icons = styled.div`
margin-top: 2px;
margin-left: 3px;
`

const Img = styled.img``



const Header:React.FC =() => {
    return (
      <FHead>
        <Logo>
           <Img src={Log} />
        </Logo>
        <Naav>
            <N>
                School
                <Icons>
                <AiOutlineDown />
                </Icons>

            </N>
            <N>
                Enterprise
                <Icons>
                <AiOutlineDown />
                </Icons>
                
            </N>
            <N>
                Company
                <Icons>
                <AiOutlineDown />
                </Icons>
            </N>
        </Naav>

        <Buttt>
            <Button cl='white' bd='' bg='#fbaf1b' text='Get started'/>
            <Button cl='#050794' bd='#050794' bg='transparent' text='Explore'/>
        </Buttt>
      </FHead>
    )
};
export default Header