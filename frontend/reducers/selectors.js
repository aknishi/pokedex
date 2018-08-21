import values from 'lodash/values';

export const selectAllPokemon = state => values(state.entities.pokemon)

export const selectPokeItems = (state, poke) => {
  if ( poke ) {
    return poke.item_ids ? poke.item_ids.map(id => state.entities.items[id]) : [];
  }
  return [];
};

export const selectPokemonItem = (state, id) => {
  return state.entities.items[id];
};
