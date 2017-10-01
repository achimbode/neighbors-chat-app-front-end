import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class NavBarButtons extends Component {

  renderButtons = () => {
    return this.props.userInfo.token ? (
      <div className="NavBarButtons">
        <div className="LogButtons">
          <Link to='login'>Log Out</Link>
        </div>
        <div className="ProfileButtons">
          <a>Delete Account</a>
        </div>
      </div>
    ) : (
      <div className="NavBarButtons">
        <div className="LogButtons">
          <Link to='login'>Log In</Link>
        </div>
        <div className="ProfileButtons">
          <Link to='signup'>Sign Up</Link>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className="NavBarButtonsContainer">
        {this.renderButtons()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarButtons);
