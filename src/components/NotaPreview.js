import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NotaPreview extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="nota-preview" >
                <h3>{this.props.categoria}</h3>
                <h1>{this.props.titulo}</h1>
                <h5>{this.props.fecha}</h5>
                <img src='http://elportaldelchacinado.com/wp-content/uploads/Por-qu%C3%A9-la-mayor%C3%ADa-de-las-botellas-de-vino-son-verdes-la-comunidad-de-los-vinos-el-portal-del-chacinado.jpg' />
                {this.props.texto ? <p>{this.props.texto}</p> : null}
                <NavLink to={`/notas/id/${this.props.id}`} >Leer mas</NavLink>
            </div>
        )
    }
}

export default NotaPreview;