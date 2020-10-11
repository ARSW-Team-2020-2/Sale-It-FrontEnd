import React from 'react';
import Aplicacion from './Aplicacion';
import About from './About';
import Categorias from './Categorias';
import MisSubastas from './MisSubastas';
import ContactPanel from './ContactPanel';

export default function VistaPrincipal() {
    
  return (
      <div>
    <Aplicacion />
    <About />
    <Categorias />
    <MisSubastas />
    <ContactPanel />
    </div>
  );
}