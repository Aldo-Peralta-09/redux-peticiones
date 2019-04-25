import React from 'react';
import { connect } from 'react-redux';
import {GET_DATA_ACTION,DELETE_DATA_ACTION,UPDATE_DATA_ACTION, NEW_DATA_ACTION} from '../redux/actions/ActionType';
import '../css/style.css';
import Item from '../components/Item';

class GetData extends React.Component {

    componentDidMount(){
      this.props.getDatos();
    }

    componentWillReceiveProps(nextProps){
      const ActualProps = this.props;
      const NewProps = nextProps;

      if(ActualProps.responseNewDato.status === "Pending" && NewProps.responseNewDato.status === "OK"){
        this.refs.new_dato.value = "";
        this.props.getDatos();
      }

      if(ActualProps.responseDeleteDato.status === "Pending" && NewProps.responseDeleteDato.status === "OK"){
        this.props.getDatos();
      }
    }

    render(){
      return(
        <section id="blog" className="padd-section wow fadeInUp">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6 text-center">
                        <div className="section-title">
                            <h2>Comunicaión Social</h2>
                            <p className="separator">Notas de Comunicación Social</p>
                            <div className="input-group mb-3">
                              <input 
                                type="text" 
                                ref="new_dato" 
                                class="form-control" 
                                placeholder="Nuevo nombre" 
                                aria-label="Recipient's username" 
                                aria-describedby="button-addon2"/>
                              <div className="input-group-append">
                                <button 
                                  className="btn btn-outline-secondary" 
                                  type="button" 
                                  id="button-addon2"
                                  onClick={() => {
                                    const el_nombre = this.refs.new_dato.value;
                                    this.props.sendDatos(el_nombre);
                                  }}>Agregar</button>
                                  <hr/>
                              </div>
                            </div>
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
      return this.props.stateDatos.map((item) => {
        if(item){
          return <div className="col-12 col-lg-4">
                <div className="block-blog text-left" style={{paddingBottom:"15px"}}>
                    <div className="content-blog text-center">
                        <Item data={item}/>
                    </div>
                </div>
            </div>
        }
        return null;
      });
    }
  }
  
  const mapStateToProps = ({stateDatos,responseNewDato,responseDeleteDato}) => {
    return {
      stateDatos: stateDatos,
      responseNewDato: responseNewDato,
      responseDeleteDato: responseDeleteDato
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getDatos: () => dispatch(GET_DATA_ACTION()),
      sendDatos: (un_nombre) => dispatch(NEW_DATA_ACTION(un_nombre))
    };
  };
  
  const ConnectDemo = connect(mapStateToProps, mapDispatchToProps)(GetData);
  
  export default ConnectDemo;