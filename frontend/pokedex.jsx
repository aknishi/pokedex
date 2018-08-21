import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { receiveAllPokemon, requestAllPokemon, requestSinglePokemon, createPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon, fetchSinglePokemon } from './util/api_util';
import merge from 'lodash/merge';
// import { selectAllPokemon } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createPokemon = createPokemon;
  window.merge = merge;

  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
