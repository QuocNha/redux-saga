import {all} from 'redux-saga/effects';
import counterSaga from '../features/counter/CounterSaga';

function* helloSaga(){
    console.log("hello Saga")
};
export default function* rootSaga(){
    console.log("rootSaga");
    yield all([helloSaga(),counterSaga()]);
}