import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Item from '../items/item';
import LoadingIcon from './loading_icon';
import ItemDetailContainer from '../items/item_detail_container';

class PokemonDetail extends Component {
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.pokemonId !== nextProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(nextProps.match.params.pokemonId);
    }
  }

  render() {
    const { pokemon, items, loading } = this.props;

    if (loading) {
      return <section className="pokemon-detail"><LoadingIcon /></section>;
    }

    if (!pokemon) return null;

    return (
      <section className="pokemon-detail">
        <figure>
          <img src={pokemon.image_url} alt={pokemon.name} />
        </figure>
        <ul>
          <li>
            <h2>{pokemon.name}</h2>
          </li>
          <li>TYPE: {pokemon.poke_type}</li>
          <li>ATTACK: {pokemon.attack}</li>
          <li>DEFENSE: {pokemon.defense}</li>
          <li>MOVES: {pokemon.moves.join(', ')}</li>
        </ul>
        <section className="toys">
          <h3>Items</h3>
          <ul className="toy-list">
            {items.map(item => <Item key={item.name} item={item} />)}
          </ul>
          <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
        </section>
      </section>
    )
  }
}

export default PokemonDetail;
