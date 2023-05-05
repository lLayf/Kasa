import './logement.css';
import Slideshow from '../../components/slideshow/Slideshow';
import { useParams } from 'react-router-dom';
import logements from '../../assets/api/logements.json';

function Logement() {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id)

  return (
    <>
    <section className='top-section'>
      <Slideshow pictures={logement.pictures} />
    </section>
    </>
  );
}

export default Logement;