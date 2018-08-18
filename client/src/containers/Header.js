import { connect } from 'react-redux';
import TheComponent from '../components/Header';

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

const Header = connect(
  mapStateToProps,
  null
)(TheComponent);

export default Header;
