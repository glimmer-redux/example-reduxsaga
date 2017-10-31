import reducers from './reducers/index';
import createSagaMiddleWare from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import root from './sagas/index';

let store;
const makeStoreInstance = () => {
  if (!store) {
    let sagaMiddleware = createSagaMiddleWare();
    let middleware = applyMiddleware(sagaMiddleware);
    let createStoreWithMiddleware = compose(middleware)(createStore);
    store = createStoreWithMiddleware(reducers);
    sagaMiddleware.run(root);
  }
  return store;
}

export default makeStoreInstance;
