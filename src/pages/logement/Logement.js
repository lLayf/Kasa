import './logement.css';
import Slideshow from '../../components/slideshow/Slideshow';
import Tag from '../../components/tag/Tag';
import Stars from '../../components/stars/Stars';
import Avatar from '../../components/avatar/Avatar';
import Collapse from '../../components/collapse/Collapse';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../../assets/api/logements.json';

function Logement() {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id)

  if (!logement) {
    return <Navigate to="/error" />;
  }

  return (
    <>
    <section className='top-section'>
      <Slideshow pictures={logement.pictures} />
    </section>
    <section className='mid-section'>
      <div className='mid-section-1'>
        <div className='mid-section-text'>
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
        </div>
        <div className='tags-container'>
          <ul>
            {logement.tags.map((tag, index) =>
              <Tag key={index} name={tag} />
            )}
          </ul>
        </div>
      </div>
      <div className='mid-section-2'>
        <Stars number={logement.rating} />
        <Avatar name={logement.host.name} picture={logement.host.picture} />
      </div>
    </section>
    <section className='collapse-logement-container'>
      <Collapse
        title="Desctiption"
        content={logement.description}
      />
      <Collapse title="Equipements" 
        content={logement.equipments}
      />
    </section>
    </>
  );
}

export default Logement;
