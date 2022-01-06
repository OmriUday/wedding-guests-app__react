import { useNavigate } from "react-router-dom";
import '../App.css';
import NavBar from '../components/layout/NavBar';
import NewGuestForm from '../components/posts/NewGuestForm';
import { writeUserData } from '../api/apiControllers';

function NewGuestPage() {
  let navigate = useNavigate();
  // Get Data From Child - NewGuestForm ---> postData
  // Here I Send The Form Submit Data To FireBase With Http Request
  function addNewGuestHandler(postData) {
    writeUserData(postData);
    navigate('/all-guests');
  };

  return (
    <>
      <NavBar />
      <section>
        <h1 className='NewGuestPage-title'>Add New Post</h1>
        <NewGuestForm onAddNewGuest={addNewGuestHandler} />
      </section>
    </>
  )
};

export default NewGuestPage;