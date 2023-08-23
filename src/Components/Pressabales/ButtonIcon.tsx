import React from 'react'
import styled from "@emotion/styled"
import { MdArrowForward } from "react-icons/md";


interface Iprops {
	bd: string;
	bg: string;
	text: string;
	cl: string;
}


const Icn = styled.div<{ bgg: string; bdd: string; cl: string }>`
padding: 12px 24px 12px 24px;
background-color: ${(props) => props.bgg};
color: white;
border: 1px solid ${(props) => props.bdd};
cursor: pointer;
transition: all 350ms;
color: ${(props) => props.cl};
border-radius: 5px;

:hover {
    transform: scale(0.97);
}
display: flex;
font-size: 20px;`


const MainBut = styled.div`
display: flex;
align-items: center;
`;
const Icon = styled.div`
	margin-left: 30px;
`;





const ButtonIcon: React.FC<Iprops> = ({ bg, bd, text, cl }) => {
	return (
		<Icn cl={cl} bdd={bd} bgg={bg}>
			<MainBut>{text} </MainBut>{" "}
			<Icon>
				<MdArrowForward />
			</Icon>
		</Icn>
	);
};

export default ButtonIcon
