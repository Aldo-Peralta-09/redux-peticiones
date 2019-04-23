import React from 'react';
import { connect } from 'react-redux';
import GET_DATA_ACTION from './redux/actions/ActionType';

class App extends React.Component {
  render(){
    return(
      <div>
        {this._renderNames()}
        <button onClick={this.props.getData}>Get Data</button>
      </div>
    );
  }

  _renderNames = () => {
    return this.props.datosState.map((item) => {
      if(item){
        return <h1>{item.tags}</h1>
      }
      return null;
    });
  }
}

const mapStateToProps = ({datosState}) => {
  return {
    datosState: datosState
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      return dispatch(GET_DATA_ACTION());
    }
  };
};

const ConnectDemo = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectDemo;