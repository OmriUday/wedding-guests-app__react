import { useRef, useState } from 'react';

function NewGuestForm(props) {
  const [dateState] = useState(new Date());
  const titleInputRef = useRef();
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const localDate = dateState.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
      const localClock = dateState.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })

    // New Form Object Data Submitted By User
    const postData = {
      author: localStorage.isAuth,
      id: enteredTitle,
      title: enteredTitle,
      name: enteredName,
      description: enteredDescription,
      localClock: localClock,
      localDate: localDate
    };
    props.onAddNewGuest(postData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='title'>Guest name</label>
        <input type="text" required id="title" ref={titleInputRef} />
      </div>
      <div>
        <label htmlFor='number'>Number of attendants</label>
        <input type="number" required id="number" min='0' ref={nameInputRef} />
      </div>
      <div>
        <label htmlFor='description'>Remarks</label>
        <textarea id="description" required rows='3' ref={descriptionInputRef}></textarea>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default NewGuestForm;