import {users} from './users';
import {user} from './user';
import {repos} from './repos';
import {combineReducers} from 'redux';

export default combineReducers({users, user, repos});
