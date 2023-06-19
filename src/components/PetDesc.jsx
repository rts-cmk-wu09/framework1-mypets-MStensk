import styled from "styled-components";
import { PetTag } from "./PetTag";
const placeholder = 'asdasdasd'

const StyledP = styled.p`
max-height: 60px;
word-wrap: break-word;
height: 100%;
max-width: 160px;
`
const PetDesc = (props) => {
    return <StyledP {...props} onError={event => {
        event.target.style.display = 'none';
        event.target.innerText = placeholder;
    }}>{props.desc}</StyledP>;

};

export default PetDesc;