import './slideshow.css';
import arrowLeft from '../../assets/img/arrow-left.svg';
import arrowRight from '../../assets/img/arrow-right.svg';
import { useState } from 'react';

function Slideshow(props) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(props.pictures.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  const nextSlide = () => {
    if (current === props.pictures.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <div className='slideshow'>
      {props.pictures.map((picture, index) =>
        <img className={current === index ? 'slide-picture active' : 'slide-picture'} key={index} src={picture} alt="" />
      )}
      {props.pictures.length > 1 &&
        <>
        <span onClick={previousSlide} className='arrow arrow-left'>
          <img src={arrowLeft} alt="fleche droite" />
        </span><span onClick={nextSlide} className='arrow arrow-right'>
          <img src={arrowRight} alt="fleche gauche" />
        </span><span className='picture-counter'>
          <p>{current + 1}/{props.pictures.length}</p>
        </span>
        </>
      }
    </div>
  );
}

export default Slideshow;