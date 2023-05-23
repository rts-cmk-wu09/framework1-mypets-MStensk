import styled from "styled-components";
import { CiLocationOn } from "react-icons/ci"

const StyledLocation = styled(CiLocationOn)`
color: blue;
`

const StyledDiv = styled.div`
display: flex;
align-items: center;
`
const StyledP = styled.p`
margin: 0;
font-size: 14px;
margin-left: 0.1em;
`

export const PetLocation = () => {

    return (
        <StyledDiv>
            <StyledLocation />
            <StyledP>New York City</StyledP>
        </StyledDiv>
    );

};

export default PetLocation;