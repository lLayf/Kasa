import './card.css';

function Card(props) {
  return (
    <a href={'logements/' + props.id} className='card'>
      <img src={props.cover} alt="appartements" />
      <h2>{props.title}</h2>
      <span className='card-opacity'></span>
    </a>
  );
}

export default Card;
