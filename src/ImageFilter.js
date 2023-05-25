import React from 'react';
import alimentacion from './assets/images/alimentacion.svg';
import salud from './assets/images/salud.svg';
import otros from './assets/images/otros.svg';
import transporte from './assets/images/transporte.svg';
import utilidades from './assets/images/utilidades.svg';
import { Icono, IconoTema } from './Components/UI';

export default (type) => {
    const Images = {
        Restaurante: <IconoTema src={alimentacion} alt='restaurante'/>,
        Salud: <IconoTema src={salud} alt='Salud'/>,
        Transporte: <IconoTema src={transporte} alt='transporte'/>,
        Utilidades: <IconoTema src={utilidades} alt='Utilidades'/>,
        default: <IconoTema src={otros} alt='default'/>,
    };
    return Images[type] || Images["default"];
};