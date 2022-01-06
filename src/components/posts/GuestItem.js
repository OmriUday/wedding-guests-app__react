import classes from './GuestItem.module.css';
import Card from '../ui/Card';
import '../../App.css';

function GuestItem(props) {
  return (
    <li className='item-container'>
      <Card className={classes.card}>
        <div>
          <p className={classes.date}>Posted {props.localDate} at {props.localClock}</p>
          <p className={classes.author}>Created by: {props.author}</p>
        </div>
        <div className={classes.content}>
          <h2 className={classes.guestName}>Product: {props.title}</h2>
          <h2 className={classes.qty}>Qty: {props.name}</h2>
          <h2 className={classes.description}>Description: {props.description}</h2>
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>Delete</button>
        </div>
      </Card>
    </li>
  )
};

export default GuestItem;
