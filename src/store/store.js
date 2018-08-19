import {createStore,combineReducers, applyMiddleware, compose} from '../../../../../../../../Users/ninadsagdeo/Library/Caches/typescript/2.9/node_modules/redux';
import thunk from 'redux-thunk';
import userOnBoarding from '../store/userOnBoarding/Reducer';
import history from './history';


const rootReducer = combineReducers({
  userOnBoarding:userOnBoarding
});
const composeEnhancers =  
  typeof window === 'object' &&
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose);

export function configureStore() {  
  const middlewares = [];
  const store = createStore(
    rootReducer,composeEnhancers(applyMiddleware(...middlewares,thunk)),
  );
  return store;
}

export default configureStore;