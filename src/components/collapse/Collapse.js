import { useState } from "react";
import './collapse.css';
import arrowDown from '../../assets/img/arrow-down.svg';
import arrowUp from '../../assets/img/arrow-up.svg';

function Collapse(props) {
  const [open, setOpen] = useState(props.initiallyOpen || false);

  return (
    <div className="collapse">
      <button className='collapse-btn' onClick={() => setOpen(!open)}>
        <h3>{props.title}</h3>
        <img src={open ? arrowDown : arrowUp} alt="icon menu" />
      </button>
      <div className={open ? 'collapsable' : 'collapsable close'}>
        {Array.isArray(props.content)
          ? <ul>
              {props.content.map((content, index) =>
                <li key={index}>{content}</li>
              )}
            </ul>
          : <p>{props.content}</p>
        }
      </div>
    </div>
  );
}

export default Collapse;
