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
        <div className='loader'></div>
        <div className='loadingText'>Loading...</div>

      </section>
    );
  }

  return (
    <>
      <NavBar />
      <h1 className='AllGuestsPage-title animatedAllGuestsFadeUp AllGuestsFadeUp animatedLogin'>All requests</h1>
      <h6 className='AllGuestsPage-subTitle animatedAllGuestsFadeUp AllGuestsFadeUp animatedLogin'>Total posts found: {numberOfPosts}</h6>
      <section id='fadein' className='fadein'>
        <GuestList className='AllGuestsPage-main' posts={loadedGuests} />
      </section>
    </>
  );
};

export default AllGuestsPage;