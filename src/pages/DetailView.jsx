import Heading from "../components/Heading";
import PetCard from '../templates/PetCard'
import Image from '../components/Image'
import { PetTag } from '../components/PetTag'
import Navigation from "../components/Navigation"
import useAxios from "../UseAxios";
import PetDesc from "../components/PetDesc";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import DetailHeading from "../components/DetailHeading";
import DetailDesc from "../components/DetailDesc";
import dogLogo from "../assets/landingPage_Dog.png"


const StyledHeader = styled.header`
  background-position: 0 20%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 3;
  height: 200px;
  align-items: end;
  justify-content: end;
`;

const StyledDiv = styled.div`
border-top: 1px solid black;
border-radius: 25px 25px 0px 0px;
height: 445px;
width: auto;
bottom: 100px;
background-color: white;
`
const StyledMain = styled.main`
background-color: #57419D;
`
const StyledButton = styled.button`
margin-top: 20em;
background: #57419D;
/* Shadow 3 */
box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(170, 170, 204, 0.25), 10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #FFFFFF;
border-radius: 32px;
width: 374px;
align-self: center;
height: 45px;
color: white;
`

const DetailView = () => {
    const [data, error, loading] = useAxios();
    let { id } = useParams();
    const animal = data && data.animals.find(animal => animal.id === parseInt(id));

    return (
        <>
            {error && <p>Der opstod en fejl...</p>}
            {loading && <p>loading...</p>}
            {animal && (
                <StyledMain>
                    <StyledHeader>
                        <Image
                            width="220"
                            height="220"
                            src={`https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/${animal.id}/1/?bust=1686812846&width=450`}
                            alt="Cover Image"
                        />
                    </StyledHeader>
                    <StyledDiv>
                        <DetailHeading title={animal.name} />
                        <DetailDesc desc={animal.description} />
                        <Link to={"/Animals"}><StyledButton>Go back</StyledButton></Link>
                    </StyledDiv>
                </StyledMain>
            )}
        </>
    );
};

export default DetailView;