import styled from "styled-components";


const StyledP = styled.p`
max-height: 60px;
word-wrap: break-word;
height: 100%;
max-width: 215px;
`
const PetDesc = (props) => {
    return (
        <div>
            <StyledP>{props.desc}{props.align}</StyledP>
        </div>
    );

};

export default PetDesc;