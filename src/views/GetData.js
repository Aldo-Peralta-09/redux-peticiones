import React from 'react';
import { connect } from 'react-redux';
import GET_DATA_ACTION from '../redux/actions/ActionType';
import '../css/style.css';

class GetData extends React.Component {
    render(){
      return(
        <section id="blog" className="padd-section wow fadeInUp">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6 text-center">
                        <div className="section-title">
                            <h2>Comunicaión Social</h2>
                            <p className="separator">Notas de Comunicación Social</p>
                            <div style={{paddingTop:"15px"}}><button onClick={this.props.getData} type="button" className="btn btn-success scrollto">Get Data</button></div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {this._renderNames()}
                </div>
            </div>
        </section>
      );
    }
  
    _renderNames = () => {
      return this.props.datosState.map((item) => {
        if(item){
          return <div className="col col-lg-4">
                <div className="block-blog text-left" style={{paddingBottom:"15px"}}>
                    <div className="content-blog text-center">
                        <h4>{item.tags}</h4>
                    </div>
                </div>
            </div>
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
  
  const ConnectDemo = connect(mapStateToProps, mapDispatchToProps)(GetData);
  
  export default ConnectDemo;