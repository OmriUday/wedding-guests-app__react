import { useState, useEffect } from 'react';
import '../App.css';
import NavBar from '../components/layout/NavBar';
import GuestList from '../components/posts/GuestList';

function AllGuestsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedGuests, setLoadedGuests] = useState([]);
  const numberOfPosts = loadedGuests.length;

  useEffect(() => {
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
      <section className='loaderContainer transition-fade'>
        <p className='loading'>Loading...</p>
        <div className='loader'></div>
      </section>
    );
  }

  return (
    <>
      <NavBar />
      <section id='fadein' className='fadein AllGuestsPage-container'>
        <h1 className='AllGuestsPage-title'>All Guests</h1>
        <h6 className='AllGuestsPage-subTitle'>Total posts found: {numberOfPosts}</h6>
        <GuestList className='AllGuestsPage-main' posts={loadedGuests} />
      </section>
    </>
  );
};

export default AllGuestsPage;