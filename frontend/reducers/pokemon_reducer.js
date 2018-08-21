import merge from 'lodash/merge';
import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  let poke;
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    case RECEIVE_SINGLE_POKEMON:
      poke = action.payload.pokemon;
      nextState = merge(state, {[poke.id]: poke});
      return nextState;
    default:
      return state;

  }
}

export default pokemonReducer;
