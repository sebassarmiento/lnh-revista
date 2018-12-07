import React, { Component } from 'react';
import '../css/navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => this.handleScroll())
    }

    handleScroll(e) {
        if (window.scrollY > 270) {
            console.log(this)
            this.setState({ scrolled: true })
        } else if (window.scrollX < 270 && this.state.scrolled) {
            this.setState({ scrolled: false })
        }
    }

    render() {
        return (
            <nav onClick={() => this.setState({ open: !this.state.open })} className={this.state.scrolled ? 'navbar scrolled' : this.state.open ? "navbar opened-menu" : 'navbar'} >
                    <NavLink to="/" exact >New</NavLink >
                    <NavLink to="/vinos" >Vinos</NavLink >
                    <NavLink to="/gastronomia" >Gastronomia</NavLink >
                    <NavLink to="/turismo" >Turismo</NavLink >
                    <NavLink to="/cultura" >Cultura</NavLink >
                    <NavLink to="/editorial" >Editorial</NavLink >
                    <NavLink to="/contacto" >Contacto</NavLink >
                <div className={this.state.open ? "hamburguer opened" : "hamburguer"} ></div>
            </nav>
        )
    }
}

export default Navbar;