import styled from "styled-components";
import Heading from "../components/Heading";
import Image from "../components/Image";
import PetDesc from "../components/PetDesc";
import PetLocation from "../components/PetLocation";
import useAxios from "../UseAxios";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    const [data, error, loading] = useAxios();
    return (
        <>
            {error && <p>Der opstod en fejl...</p>}
            {loading && <p>loading...</p>}
            {data && (
                <>
                    {data.animals.map((animal) => (
                        <Link to={`details/${animal.id}`} key={animal.id}>
                            <StyledArticle>
                                <figure>
                                    <Image />
                                </figure>
                                <div className="FlexContainer">
                                    <Heading title={animal.name} />
                                    <PetDesc desc={animal.description} />
                                </div>
                            </StyledArticle>
                        </Link>
                    ))}
                </>
            )}
        </>
    );
};

export default PetCard;