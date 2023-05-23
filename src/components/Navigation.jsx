import styled from "styled-components";
import { BiHomeAlt } from "react-icons/bi"
import { BsChat, BsPerson } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
const StyledHome = styled(BiHomeAlt)`
color: black;
`
const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 105px;
  background-color: #fff;
  font-size: 1.4rem;
  color: #979797;
  border-top: 1px solid transparent;
  border-radius: 25px 25px 0px 0px;
  box-shadow: 0px 0px 5px 1px rgb(0 0 0 / 0.2);
`;

const Navigation = () => {
    return (
        <StyledNav>
            <StyledHome />
            <BsChat />
            <AiOutlineHeart />
            <BsPerson />
        </StyledNav>
    );

}

export default Navigation;