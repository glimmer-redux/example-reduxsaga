import { fork } from 'redux-saga/effects';
import demo from './example';

export default function* root() {
  yield [
    fork(demo)
  ];
}
