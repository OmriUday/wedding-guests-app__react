import { useRef } from 'react';
import classes from './../../pages/NewGuestPage.module.css';

function NewGuestForm(props) {
  const titleInputRef = useRef();
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    // New Form Object Data Submitted By User
    const postData = {
      id: enteredTitle,
      title: enteredTitle,
      name: enteredName,
      description: enteredDescription
    };
    props.onAddNewGuest(postData);
  }

  return (
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Guest name</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='number'>Number of attendants</label>
          <input type="number" required id="number" min='0' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Remarks</label>
          <textarea id="description" required rows='3' ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>Submit</button>
        </div>
      </form>
  )
};

export default NewGuestForm;