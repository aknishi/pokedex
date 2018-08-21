import { connect } from 'react-redux';

import PokemonForm from './pokemon_form';
import { createPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = ({ ui }) => {
  return ({errors: ui.errors});
};

const mapDispatchToProps = dispatch => ({
  createPokemon: pokemon => dispatch(createPokemon(pokemon))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm);
