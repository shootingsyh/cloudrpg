import React from 'react';
import Loader from '../../resource/Loader';

export default ({name, ui_tilesets}) => {
    return <img src={`${name}.png`} />;
}