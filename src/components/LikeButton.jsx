import { styled } from "styled-components"
import { AiOutlineBell } from "react-icons/ai"
const StyledLike = styled(AiOutlineBell)`
border: 1px solid gray;
border-radius: 30px;
font-size: 1.4em;
padding: 0.4em;
margin-left: 12em;
margin-top: 1em;
color: #5533EA;
`


const LikeButton = () => {
    return (
        <StyledLike />
    )
}

export default LikeButton;