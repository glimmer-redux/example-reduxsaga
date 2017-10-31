import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

function* demoAsync(action) {
  yield put({type: 'LOADING'});
  yield call(delay, 1000);
  yield put({type: 'SAGA_ACTION'});
}

export default function* demo() {
  yield takeLatest('SAGA_ACTION_ASYNC', demoAsync);
}
