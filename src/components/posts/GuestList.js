import GuestItem from './GuestItem';
import classes from './GuestList.module.css';

function GuestList(props) {
  return (
    <ul className={classes.list}>
      {props.posts.map((item) => (
        <GuestItem className={classes.main}
          localClock={item.localClock}
          localDate={item.localDate}
          author={item.author}
          key={item.id}
          title={item.title}
          name={item.name}
          description={item.description}
          postsNumber={props.posts.length}
        />
      ))}
    </ul>
  );
};

export default GuestList;