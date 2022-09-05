import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeEvery } from "redux-saga/effects";
import { incrementSaga, incrementSagaSuccess } from "./counterSlice";


function* log(action: PayloadAction ){
  console.log("hello saga",action);
};
function* handleIncrementSaga(action: PayloadAction<number>){
  console.log("Text IncrementSaga");
  yield delay(2000);
  yield put(incrementSagaSuccess(action.payload));

}
export default function* counterSaga(){
  console.log("counter saga");
  yield takeEvery(incrementSaga.toString(),handleIncrementSaga);
} ;