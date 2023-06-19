import Heading from "../components/Heading";
import PetCard from '../templates/PetCard'
import Image from '../components/Image'
import { PetTag } from '../components/PetTag'
import Navigation from "../components/Navigation"
import useAxios from "../UseAxios";
import LikeButton from "../components/LikeButton";
const ListView = (props) => {
    return (
        <>
            <main>
                <section className="PetListContainer">
                    <LikeButton />
                    <div className="PetTagContainer">
                        <PetTag title="Cats" />
                        <PetTag title="Dogs" />
                        <PetTag title="Birds" />
                        <PetTag title="Other" />
                    </div>
                    <div className="PetCardContainer">
                        <PetCard />
                    </div>
                </section>
                <footer>
                    <Navigation />
                </footer>
            </main>

        </>
    );
}

export default ListView;
