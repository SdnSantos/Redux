import { createStore } from 'redux';

import reducers from './reducer'

// createStore será o responsável por pegar todos os reducers
// e montar na store
export default createStore(reducers);