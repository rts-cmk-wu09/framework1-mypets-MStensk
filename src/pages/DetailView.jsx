import Heading from "../components/Heading";
import PetCard from '../templates/PetCard'
import Image from '../components/Image'
import { PetTag } from '../components/PetTag'
import Navigation from "../components/Navigation"
import useAxios from "../UseAxios";
import PetDesc from "../components/PetDesc";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-position: 0 20%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 3;
  height: 200px;
  align-items: end;
  justify-content: end;
`;

const StyledDiv = styled.div`
border-top: 1px solid black;
border-radius: 25px;
height: 445px;
width: auto;
bottom: 100px;
background-color: white;
`
const StyledBody = styled.main`
background-color: #57419D;
`

const DetailView = () => {
    return (
        <StyledBody>
            <StyledHeader>
                <Image />
            </StyledHeader>
            <StyledDiv>
                <Heading title="Dog" />
                <PetDesc desc="halahlasldasdhalahlasldasdhalahlasldasdhalahlasldasdhalahlasldasdhalahlasldasd" />

            </StyledDiv>
        </StyledBody>

    )
}

export default DetailView;