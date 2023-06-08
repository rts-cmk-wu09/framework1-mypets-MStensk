import { Link } from "react-router-dom";
import dogLogo from "../assets/landingPage_Dog.png"
import styled from "styled-components";

const StyledButton = styled.button`
background: #57419D;
/* Shadow 3 */

box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(170, 170, 204, 0.25), 10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #FFFFFF;
border-radius: 32px;
width: 374px;
align-self: center;
height: 45px;
color: white;
`
const StyledDiv = styled.div`
padding-top: 6em;
padding-bottom: 2em;
padding-left: 2em;
`

const LandingPage = () => {
    return (
        <main>
            <StyledDiv>
                <img src={dogLogo} width={300} height={300} />
            </StyledDiv>
            <div>
                <h1>Welcome!</h1>
                <p>Are you looking for your own pet? Well look no further! Just click the button down below to get started</p>
                <Link to={"/animals"}><StyledButton>Get Started!</StyledButton></Link>
            </div>
        </main>


    )

}

export default LandingPage;