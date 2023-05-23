import ListView from './pages/ListView'
import Heading from './components/Heading'
import PetCard from './templates/PetCard'
import Image from './components/Image'
import { PetTag } from './components/PetTag'
import Navigation from "./components/Navigation"
import './App.css'

function App() {
  return (
    <>
      <div className='App'>
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
      </div>
    </>
  )
}

export default App
