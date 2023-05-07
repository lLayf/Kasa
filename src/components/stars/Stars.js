import './stars.css';
import starRed from '../../assets/img/star-red.svg';
import starGrey from '../../assets/img/star-grey.svg';

function Stars(props) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className='stars'>
      {stars.map(star =>
        <img key={star} src={star > props.number ? starGrey : starRed} alt="étoile" />
      )}
    </div>
  );
}

export default Stars;
