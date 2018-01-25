import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


{/* KOD DO MODUŁU HOME*/}
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Hello world!</h2>
      </div>
    );
  }
}
{/* KONIEC KODU DO MODUŁU HOME*/}



const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Home.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
