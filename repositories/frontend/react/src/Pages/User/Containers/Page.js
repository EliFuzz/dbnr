import { connect } from "react-redux";

import Page from "Pages/User/Components/Page";

import { isFetchingUsers, getUsers } from "Pages/User/utils/selectors/users";

import { requestUsers } from "Pages/User/utils/thunks/requestUsers";

const mapStateToProps = (state, props) => ({
  isFetchingUsers: isFetchingUsers(state, props),
  getUsers: getUsers(state, props)
});

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
