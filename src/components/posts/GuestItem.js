import classes from './GuestItem.module.css';
import Card from '../ui/Card';

function GuestItem(props) {
  return (
    <li className={classes.item}>
      <Card className={classes.card}>
        <div>
          <p className={classes.date}>Date</p>
          <p className={classes.byUser}>By {localStorage.isAuth}</p>
        </div>
        <div className={classes.content}>
          <h2 className={classes.guestName}>Guest name: {props.title}</h2>
          <h2>Number of attendants: {props.name}</h2>
          <h2 className={classes.description}>Remarks: {props.description}</h2>
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>Delete</button>
        </div>
      </Card>
    </li>
  )
};

export default GuestItem;