import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Fade } from 'react-reveal';

class NotaPreview extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleClick(){
        if(this.props.click){
            this.setState({redirect: true})
        }
    }

    render() {
        return (
            <Fade bottom>
            <div onClick={() => this.handleClick()} className="nota-preview" >
                <h3>{this.props.categoria}</h3>
                <h1>{this.props.titulo}</h1>
                <h5>{this.props.fecha}</h5>
                <img src='http://elportaldelchacinado.com/wp-content/uploads/Por-qu%C3%A9-la-mayor%C3%ADa-de-las-botellas-de-vino-son-verdes-la-comunidad-de-los-vinos-el-portal-del-chacinado.jpg' />
                {this.props.texto ? <p>{this.props.texto}</p> : null}
                <div className="leer-mas-btn" >
                <button onClick={() => this.setState({redirect: true})} >Leer mas</button>
                </div>
                {
                    this.state.redirect ? <Redirect to={`/notas/id/${this.props.id}`} /> : null
                }
            </div>
            </Fade>
        )
    }
}

export default NotaPreview;