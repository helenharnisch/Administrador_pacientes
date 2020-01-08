import React from 'react';
import PropTypes from 'prop-types'

const Header = (props) => (
<header><h2 className="text-center text-white">{props.titulo}</h2></header>

);


Header.propTypes = {
    titulo : PropTypes.string.isRequired
}


export default Header;