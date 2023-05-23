import styled from "styled-components";

const StyledDiv = styled.div`
box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(170, 170, 204, 0.25), 10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #FFFFFF;
border-radius: 16px;
border: 1px solid #F5F5FA;
width: 76px;
height: 32px;
margin-right: 1em;
display: flex;
`
const StyledP = styled.p`
text-align: center;
margin: 0 auto;
align-self: center;
color: #7878AB;

`
export const PetTag = (props) => {
    return (
        <StyledDiv>
            <StyledP>{props.title}</StyledP>
        </StyledDiv>
    )
}
