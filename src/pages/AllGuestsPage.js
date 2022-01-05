import { useState, useEffect } from 'react';
import classes from './AllGuestsPage.module.css';
import NavBar from '../components/layout/NavBar';
import GuestList from '../components/posts/GuestList';

function AllGuestsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedGuests, setLoadedGuests] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://wrdding-app-react-default-rtdb.firebaseio.com/posts.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const posts = [];

        for (const key in data) {
          const post = {
            id: key,
            ...data[key]
          };
          posts.push(post);
        }
        setIsLoading(false);
        setLoadedGuests(posts);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loaderContainer}>
        <p className={classes.loading}>Loading...</p> 
        <div className={classes.loader}></div>
      </section>
    );
  }

  return (
    <section className={classes.container}>
      <NavBar />
      <h1 className={classes.title}>All Guests</h1>
      <GuestList className={classes.main} posts={loadedGuests} />
    </section>
  );
};

export default AllGuestsPage;