import './avatar.css';

function Avatar(props) {
  return (
    <div className='avatar-container'>
      <div className='avatar-name'>
        <p>{props.name}</p>
      </div>
      <img src={props.picture} alt="avatar" />
    </div>
  );
}

export default Avatar;
