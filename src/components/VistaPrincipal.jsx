import React from 'react';
import Aplicacion from './Aplicacion';
import About from './About';
import Categorias from './Categorias';
import MisSubastas from './MisSubastas';
import ContactPanel from './ContactPanel';

export default function VistaPrincipal() {

    return (
    <head>
    <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0100/9605.js" async="async" ></script>
    <head>
        <div>
            <Aplicacion/>
            <About/>
            <MisSubastas/>
            <Categorias/>
            <ContactPanel/>
        </div>
    );
}
