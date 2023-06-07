import styled from "styled-components";


const StyledP = styled.p`
max-height: 80px;
word-wrap: break-word;
`
const PetDesc = (props) => {
    return (
        <div>
            <StyledP>{props.desc}</StyledP>
        </div>
    );

};

export default PetDesc;