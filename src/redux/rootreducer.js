import {combineReducers} from 'redux';
import notesReducer from './notesreducer';

const rootreducer = combineReducers({
    notes: notesReducer,
})

export default rootreducer;