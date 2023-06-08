import styled from "styled-components";

const StyledHeading = styled.h2`
font-weight: bold;
font-size: 44px;
margin-left: 0.2em;
text-align: left;
`

const DetailHeading = (props) => {
    return <StyledHeading {...props}>{props.title}</StyledHeading>;
}

export default DetailHeading;