import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";


function* log(action: PayloadAction ){
  console.log("hello saga",action);
};
export default function* counterSaga(){
  console.log("counter saga");
  yield takeEvery('*',log)
} ;