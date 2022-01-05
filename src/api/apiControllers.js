import database from './firebase-config';
import { ref, set } from 'firebase/database';

export function writeUserData(data) {
  set(ref(database, 'posts/' + data.id), data);
};