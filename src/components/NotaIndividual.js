import React, { Component } from 'react';
import '../css/notaIndividual.css';
import { Redirect } from 'react-router-dom';
import Loader from '../utils/loader';
import { Fade } from 'react-reveal';

class NotaIndividual extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props.location.pathname)
        fetch(`http://localhost:3000${this.props.location.pathname}`)
            .then(d => d.json())
            .then(res => {
                console.log(res)
                this.setState({ data: res })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        console.log(this.state.data)

        return (
            <Fade top>
            <div className="nota-individual" >
            <h4 className="volver-btn" onClick={() => this.setState({redirect: true})} ><i className="fas fa-arrow-left"></i> Volver</h4>
                {
                    this.state.data ? <React.Fragment>
                        <h4>{this.state.data.categoria}</h4>
                        <h1>{this.state.data.titulo}</h1>
                        <h3 className="nota-individual-fecha" >{this.state.data.fecha}</h3>
                        <img src="http://elportaldelchacinado.com/wp-content/uploads/Por-qu%C3%A9-la-mayor%C3%ADa-de-las-botellas-de-vino-son-verdes-la-comunidad-de-los-vinos-el-portal-del-chacinado.jpg" />
                        <p>{this.state.data.texto}</p>
                    </React.Fragment>
                        :
                        <Loader />
                }
                {this.state.redirect ? <Redirect to="/" /> : null}
            </div>
            </Fade>
        )
    }
}

export default NotaIndividual;