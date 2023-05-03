import './logement.css';
import { useParams } from 'react-router-dom';
import logements from '../../assets/api/logements.json';

function Logement() {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id)
  return (
    <div>Logement {logement.title}</div>
  );
}

export default Logement;