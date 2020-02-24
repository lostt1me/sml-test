import { combineReducers } from 'redux';
import { IStore } from '../interfaces/store/store.interface';
import { crudReducer } from './crud';

const rootReducer = combineReducers<IStore>({
  crud: crudReducer
});

export {
  rootReducer
};