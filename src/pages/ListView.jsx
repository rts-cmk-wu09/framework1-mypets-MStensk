import Heading from "../components/Heading";

const ListView = () => {
    <>
        <main>
            <section className="PetListContainer">
                <div className="FlexContainer">
                    <Heading title="Epic Pet" />
                </div>
                <div className="PetCardContainer">
                    <AllPets />
                    <AllPets />
                </div>
            </section>
        </main>

    </>
}

export default ListView;
