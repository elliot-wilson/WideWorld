import { connect } from "react-redux";
import { withRouter } from "react-router";
import { clearSearchResults, fetchSearchResults } from '../../actions/search_actions'
import Search from './search'

const mSTP = state => ({
    searchResults: state.entities.searchResults
});

const mDTP = dispatch => ({
    clearSearchResults: () => dispatch(clearSearchResults()),
    fetchSearchResults: (query) => dispatch(fetchSearchResults(query))
});

export default withRouter(connect(mSTP, mDTP)(Search))