import { connect } from 'react-redux';
import ItemDetail from './item_detail'
import { selectPokemonItem }from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  item: selectPokemonItem(state, parseInt(ownProps.match.params.itemId))
});

export default connect(
  mapStateToProps
)(ItemDetail);
