import './Modal.css';

function Modal(props) {

  return (
    <div className='modal'>
      <div className="exitQuestion">Are you sure want to log out?</div>
      <div className="description">Do not worry, Your information is locked with us safely and successfully! 🔐</div>
      <button className='button buttonAlt' onClick={props.onCancel}>
        yes
      </button>
      <button className='button buttonAlt' onClick={props.onConfirm}>
        cancel
        </button>
    </div>
  )
};

export default Modal;