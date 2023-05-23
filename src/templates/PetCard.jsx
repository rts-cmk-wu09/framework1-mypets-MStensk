import styled from "styled-components";
import Heading from "../components/Heading";
import Image from "../components/Image";
import PetDesc from "../components/PetDesc";
import PetLocation from "../components/PetLocation";

const StyledArticle = styled.article`
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: 1px solid #F5F5FA;
  border-radius: 25px;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(170, 170, 204, 0.25), 10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #FFFFFF;
  margin: 1em 0em 1em;
`;

const PetCard = () => {
    return (
        <StyledArticle>
            <figure>
                <Image />
            </figure>
            <div className="FlexContainer">
                <Heading title="Pet Name" />
                <PetLocation />
                <PetDesc />
            </div>
        </StyledArticle>
    );
};

export default PetCard;