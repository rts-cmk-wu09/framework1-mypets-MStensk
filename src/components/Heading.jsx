import styled from "styled-components";

const StyledHeading = styled.h1`
font-weight: bold;
font-size: 20px;
max-height: 30px;
word-wrap: break-word;
height: 100%;
max-width: 130px;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
`

const Heading = (props) => {
    return <StyledHeading {...props}>{props.title}</StyledHeading>;
}

export default Heading;
