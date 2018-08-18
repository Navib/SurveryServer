import { connect } from 'react-redux';
import TheComponent from '../components/App';
import * as actions from '../actions';

const App = connect(
  null,
  actions
)(TheComponent);

export default App;
