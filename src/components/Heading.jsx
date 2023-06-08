import styled from "styled-components";

const StyledHeading = styled.h1`
font-weight: bold;
font-size: 20px;


`

const Heading = (props) => {
    return <StyledHeading {...props}>{props.title}</StyledHeading>;
}

export default Heading;
