import React from 'react';
import { connect } from 'react-redux';
import {GET_DATA_ACTION,DELETE_DATA_ACTION,UPDATE_DATA_ACTION} from '../redux/actions/ActionType';

class Item extends React.Component{
    state = {
        mode: 'vista'
    }

    componentWillReceiveProps(nextProps){
        const ActualProps = this.props;
        const NewProps = nextProps;

        if(ActualProps.responseUpdateDato.status === "Pending" && NewProps.responseUpdateDato.status === "Ok"){
            this.props.getDatos();
        }
    }

    render(){
        return(
            <div>
                {this._renderMode()}
                {this._renderActions()}
            </div>
        );
    }

    _renderMode = () => {
        let show = (
            <div className="content-blog text-center">
                <button type="button" style={{minWidth:"100%"}} className="btn btn-primary">
                    {this.props.data.tags}
                </button>
            </div>
        );

        if(this.state.mode !== 'vista'){
            show = (
                <div className="content-blog text-center">
                    <div className="input-group flex-nowrap">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                        </div>
                        <input type="text" ref="edicion_nombre" defaultValue={this.props.data.tags} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
                    </div>
                </div>
            );
        }

        return show;
    }

    _renderActions = () => {
        const id = this.props.data.id;
        let btn = (
            <button 
                type="button" 
                onClick={() => {
                    this.setState({mode:'edicion'});
                }} 
                className="btn btn-primary">Editar</button>
        );

        if(this.state.mode !== 'vista'){
            btn = (
                <button 
                    type="button" 
                    onClick={() => {
                        const nombre = this.refs.edicion_nombre.value;
                        this.props.updateDato(id,nombre);
                        this.setState({mode:'vista'});
                    }} 
                    className="btn btn-primary">Guardar</button>
            );
        }

        return(
            <div className="btn-group" role="group" aria-label="Basic example">
                {btn}
                <button type="button" className="btn btn-danger">Eliminar</button>
            </div>
        );
    }
};

const mapStateToProps = ({responseUpdateDato}) => {
    return{
        responseUpdateDato: responseUpdateDato
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        getDatos: () => dispatch(GET_DATA_ACTION()),
        deleteDato: (id) => dispatch(DELETE_DATA_ACTION(id)),
        updateDato: (id,nuevo_nombre) => dispatch(UPDATE_DATA_ACTION(id,nuevo_nombre))
    };
}

const ItemConnect = connect(mapStateToProps,mapDispatchToProps)(Item);

export default ItemConnect;