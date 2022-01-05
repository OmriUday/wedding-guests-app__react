import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navBar.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../api/firebase-config';
import Modal from '../popupMessage/Modal';
import Backdrop from '../popupMessage/Backdrop';

function NavBar() {
  let navigate = useNavigate();
  const [modalIsOpen, setModalOpen] = useState(false);
  const [linksToggle, setLinksToggle] = useState(false);
  const asterisk = '#'

  const toggleSwitchHandler = () => {
    linksToggle ? setLinksToggle(false) : setLinksToggle(true);
  }

  function openModalHandler() {
    setModalOpen(true);
  };

  function closeModalHandler() {
    setModalOpen(false);
  };

  function confirmCloseModalHandler() {
    signOut(auth).then(() => {
      localStorage.clear();
      setModalOpen(false);
      navigate('/');
    })
  };

  return (
    <>
      <nav className='navbar'>
        <div className='brand-title'>LOGO</div>
        <a href={asterisk} className='toggle-button' onClick={toggleSwitchHandler}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </a>
        <div className={linksToggle ? 'active' : 'navbar-links'}>
          <ul>
            <li>
              <Link to='/all-guests'>All Guests</Link>
            </li>
            <li>
              <Link to='/new-guest'>New Guest</Link>
            </li>
            <li><span onClick={openModalHandler}>
              Logout</span>
            </li>
          </ul>
        </div>
        {linksToggle ? <></> : <div className={linksToggle ? 'active' : 'navbar-links'}>
          <h6>Welcome,</h6>
          <h6>{localStorage.isAuth}</h6>
        </div>}
      </nav>
      {modalIsOpen && <Modal onCancel={confirmCloseModalHandler} onConfirm={closeModalHandler} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </>
  );
};

export default NavBar;