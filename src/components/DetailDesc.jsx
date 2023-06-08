import styled from "styled-components";


const StyledP = styled.p`
word-wrap: break-word;
text-align: left;
max-width: 215px;
margin-left: 0.8em;
font-size: 20px;
`
const DetailDesc = (props) => {
    return (
        <div>
            <StyledP>{props.desc}{props.align}</StyledP>
        </div>
    );

};

export default DetailDesc;