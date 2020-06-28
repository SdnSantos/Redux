import { combineReducers } from 'redux';

import todo from './todo';

// combineReducers tem a função de pegar todos os reducers
// ou seja, todas essas sub-stores
// e juntar em uma store completa da aplicação
export default combineReducers({
  todo
});