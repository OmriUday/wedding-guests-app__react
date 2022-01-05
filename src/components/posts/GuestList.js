import GuestItem from './GuestItem';
import classes from './GuestList.module.css';

function GuestList(props) {
  return (
    <ul className={classes.list}>
      {props.posts.map((item) => (
        <GuestItem className={classes.main}
          key={item.id}
          title={item.title}
          name={item.name}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default GuestList;