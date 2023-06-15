import styled from "styled-components";


const StyledP = styled.p`
max-height: 60px;
word-wrap: break-word;
height: 100%;
max-width: 200px;
`
const PetDesc = (props) => {
    return (
        <div>
            <StyledP>{props.desc}</StyledP>
        </div>
    );

};

export default PetDesc;