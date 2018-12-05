import React, { Component } from 'react';
import '../css/navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar" >
                <NavLink to="/" >New</NavLink >
                <NavLink to="/vinos" >Vinos</NavLink >
                <NavLink to="/gastronomia" >Gastronomia</NavLink >
                <NavLink to="/turismo" >Turismo</NavLink >
                <NavLink to="/cultura" >Cultura</NavLink >
                <NavLink to="/editorial" >Editorial</NavLink >
                <NavLink to="/contacto" >Contacto</NavLink >
            </nav>
        )
    }
}

export default Navbar;