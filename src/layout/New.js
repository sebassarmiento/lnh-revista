import React, { Component } from 'react';
import NotaPreview from '../components/NotaPreview';
import '../css/new.css';

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
            this.state.data ? this.state.data.map((nota, index) => {
              if (index < 3) {
                return (<NotaPreview
                  key={nota._id}
                  id={nota._id}
                  fecha={nota.fecha}
                  imagen={nota.imagen}
                  titulo={nota.titulo}
                  categoria={nota.categoria} />)
              }
            })
              :
              null
          }
          <div className="new-quienes-somos" >
            <h3>QUIENES SOMOS:</h3>
            <img src="https://static.wixstatic.com/media/afb12e_6d99149d1fb04249a2f77cbb8878e03d~mv2_d_1488_2105_s_2.jpg/v1/fill/w_154,h_218,al_c,q_80,usm_0.66_1.00_0.01/afb12e_6d99149d1fb04249a2f77cbb8878e03d~mv2_d_1488_2105_s_2.webp" />
            <h3>Revista digital bilingue de Vinos, Gastronomía, Viajes y Cultura.</h3>
          </div>
        </div>
        <div className="new-column-2" >
          {
            this.state.data ? this.state.data.map(nota => {
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
              null
          }
        </div>
      </div>
    )
  }
}

export default New;