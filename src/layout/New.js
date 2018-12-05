import React, { Component } from 'react';
import NotaPreview from '../components/NotaPreview';
import '../css/new.css';
import Loader from '../utils/loader';

class New extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/notas')
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
    return (
      <div className="new-container" >
        <div className="new-column-1" >
          <h3>POST DESTACADOS:</h3>
          {
            this.state.data && this.state.data.constructor === Array ? this.state.data.map((nota, index) => {
              if (index < 3) {
                return (<NotaPreview
                  click={true}
                  key={nota._id}
                  id={nota._id}
                  fecha={nota.fecha}
                  imagen={nota.imagen}
                  titulo={nota.titulo}
                  categoria={nota.categoria} />)
              }
            })
              :
              <Loader />
          }
          <div className="new-quienes-somos" >
            <h3>QUIENES SOMOS:</h3>
            <img src="https://static.wixstatic.com/media/afb12e_6d99149d1fb04249a2f77cbb8878e03d~mv2_d_1488_2105_s_2.jpg/v1/fill/w_154,h_218,al_c,q_80,usm_0.66_1.00_0.01/afb12e_6d99149d1fb04249a2f77cbb8878e03d~mv2_d_1488_2105_s_2.webp" />
            <p>Revista digital de Vinos, Gastronomía, Turismo y Cultura.</p>
          </div>
          <div className="new-redes-sociales" >
            <h3>REDES SOCIALES:</h3>
            <div>
              <a href="#!"><i className="fab fa-twitter tw-icon"></i></a>
              <a href="#!" ><i class="fab fa-facebook fb-icon"></i></a>
            </div>
          </div>
        </div>
        <div className="new-column-2" >
          {
            this.state.data && this.state.data.constructor === Array ? this.state.data.map(nota => {
              return (<NotaPreview
                key={nota._id}
                id={nota._id}
                texto={nota.texto}
                fecha={nota.fecha}
                imagen={nota.imagen}
                titulo={nota.titulo}
                categoria={nota.categoria} />)
            })
              :
              <Loader />
          }
        </div>
      </div>
    )
  }
}

export default New;