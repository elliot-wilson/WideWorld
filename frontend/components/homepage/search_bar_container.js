import { connect } from "react-redux";
import { withRouter } from "react-router";
import SearchBar from './search_bar'

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

export default withRouter(connect(mSTP, mDTP)(SearchBar))