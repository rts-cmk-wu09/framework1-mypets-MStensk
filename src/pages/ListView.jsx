import Heading from "../components/Heading";
import PetCard from '../templates/PetCard'
import Image from '../components/Image'
import { PetTag } from '../components/PetTag'
import Navigation from "../components/Navigation"
import useAxios from "../UseAxios";
const ListView = (props) => {
    const [data, error, loading] = useAxios();
    return (
        <>
            <main>
                <section className="PetListContainer">
                    <div className="PetTagContainer">
                        <PetTag title="Cats" />
                        <PetTag title="Dogs" />
                        <PetTag title="Birds" />
                    </div>
                    <div className="PetCardContainer">
                        <PetCard />
                        <PetCard />
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
