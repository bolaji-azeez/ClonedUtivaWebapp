import styled from "@emotion/styled";
import React from "react";
//   import { MdLightMode } from "react-icons/md";

interface Iprops {
    bd: string;
    bg: string;
    text: string;
    cl: string;
}

const Butt = styled.button<{bgg: string; bdd: string; cl: string; text:string}>`
 padding: 5px 10px; 
    background-color: ${(props) => props.bgg};
    color: white;
    border: 1px solid ${(props) => props.bdd};
    cursor: pointer;
    transition: all 350ms;
    color: ${(props) => props.cl};
    border-radius: 10px;

    :hover {
        /* transform: scale(0.97); */
    }
    display: flex;
    font-size: 20px;
`;

const MainBut = styled.div`
    display: flex;
    align-items: center;
`;
//  const Icon = styled.img``

const GreenButton: React.FC<Iprops> = ({bg, bd, text, cl}) => {
    return(
        <Butt cl={cl} bdd={bd} bgg={bg} text={text}>
            <MainBut>{text} </MainBut>{" "}
            {/* {<Icon><MdLightMode/>  </Icon>} */}
        </Butt>
    );
};

export default GreenButton;