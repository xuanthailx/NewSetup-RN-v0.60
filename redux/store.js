// import {createStore, combineReducers} from 'redux';
// import countReducer from '../redux/reducers';

// const rootReducer = combineReducers({
//     count: countReducer,
// });

// const configureStore = () => {
//     return createStore(rootReducer);
// }

// export default configureStore;

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import countReducer from '../redux/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(
    { count: countReducer }
);

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
  );
  const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);
export default store;
